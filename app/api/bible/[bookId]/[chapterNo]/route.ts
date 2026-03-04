import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES, fetchBibleJson } from "@/lib/bibleData";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ bookId: string; chapterNo: string }> }
) {
    try {
        const { bookId, chapterNo } = await params;

        // Find the book definition to get its order (which matches JSON index 0-based)
        const bookDef = BIBLE_BOOKS.find(b => b.id === bookId);
        if (!bookDef) {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });
        }

        const bookIndex = bookDef.order - 1;
        const chapIndex = parseInt(chapterNo) - 1;

        // Fetch Bible data concurrently for all supported languages
        const fetchPromises = SUPPORTED_LANGUAGES.map(lang =>
            fetchBibleJson(lang.githubId).then(data => ({ code: lang.code, data }))
        );

        const languageResults = await Promise.all(fetchPromises);

        // We will construct a generic response matching the frontend expectations
        const versesMap = new Map<string, any>();

        for (const { code, data } of languageResults) {
            if (!data || !data.Book || !data.Book[bookIndex]) continue;

            const bookData = data.Book[bookIndex];
            if (!bookData.Chapter || !bookData.Chapter[chapIndex]) continue;

            const chapterData = bookData.Chapter[chapIndex];

            for (const verse of chapterData.Verse) {
                // Determine actual verse number from "Verseid" like "00000000" or simple string "1"
                // Usually it's index + 1, let's just use the index for simplicity
                const verseNumStr = String(parseInt(verse.Verseid.replace(/^0+/, '')) || (chapterData.Verse.indexOf(verse) + 1));

                if (!versesMap.has(verseNumStr)) {
                    versesMap.set(verseNumStr, {
                        number: parseInt(verseNumStr),
                        translations: []
                    });
                }

                versesMap.get(verseNumStr).translations.push({
                    language: SUPPORTED_LANGUAGES.find(l => l.code === code),
                    text: verse.Verse
                });
            }
        }

        const versesArray = Array.from(versesMap.values()).sort((a, b) => a.number - b.number);

        if (versesArray.length === 0) {
            return NextResponse.json({ error: "Chapter not fully found" }, { status: 404 });
        }

        const formattedChapter = {
            id: `${bookId}-ch-${chapterNo}`,
            number: parseInt(chapterNo),
            bookId: bookId,
            verses: versesArray
        };

        return NextResponse.json(formattedChapter);
    } catch (error) {
        console.error("Failed to fetch static Bible chapter:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
