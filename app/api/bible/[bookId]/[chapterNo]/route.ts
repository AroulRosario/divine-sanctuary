import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES, fetchChapterFromApi } from "@/lib/bibleData";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ bookId: string; chapterNo: string }> }
) {
    try {
        const { bookId, chapterNo } = await params;

        const bookDef = BIBLE_BOOKS.find(b => b.id === bookId);
        if (!bookDef) {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });
        }

        const chapterNum = parseInt(chapterNo);
        const data = await fetchChapterFromApi(bookDef.apiName, chapterNum);

        if (!data || !data.verses || data.verses.length === 0) {
            return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
        }

        const formattedChapter = {
            id: `${bookId}-ch-${chapterNo}`,
            number: chapterNum,
            bookId: bookId,
            bookName: bookDef.name,
            verses: data.verses.map(v => ({
                number: v.verse,
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES[0],
                        text: v.text.trim()
                    }
                ]
            }))
        };

        return NextResponse.json(formattedChapter);
    } catch (error) {
        console.error("Failed to load chapter:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
