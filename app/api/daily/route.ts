import { NextResponse } from "next/server";
import { fetchBibleJson, BIBLE_BOOKS, SUPPORTED_LANGUAGES } from "@/lib/bibleData";

export async function GET() {
    try {
        // We will fetch the English Bible to pick a random verse
        const englishData = await fetchBibleJson('English');

        if (!englishData || !englishData.Book || englishData.Book.length === 0) {
            return NextResponse.json({ error: "Failed to fetch Daily Word" }, { status: 500 });
        }

        // To make it deterministic for the day, we can seed the random based on the date
        const today = new Date();
        const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

        // Let's pick a random book (mostly NT or Psalms/Proverbs for inspiration)
        // Book 19=Psalms, 20=Proverbs, 40-66=NT
        const inspirationalBooks = [18, 19, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]; // 0-based indexing for JSON
        const bookIndex = inspirationalBooks[dateSeed % inspirationalBooks.length];
        const selectedBookData = englishData.Book[bookIndex];

        if (!selectedBookData || !selectedBookData.Chapter) throw new Error("Book missing");

        const chapterIndex = dateSeed % selectedBookData.Chapter.length;
        const selectedChapterData = selectedBookData.Chapter[chapterIndex];

        if (!selectedChapterData || !selectedChapterData.Verse) throw new Error("Chapter missing");

        const verseIndex = dateSeed % selectedChapterData.Verse.length;
        const selectedVerseData = selectedChapterData.Verse[verseIndex];

        // Construct response matching what the UI expects
        const bookDef = BIBLE_BOOKS.find(b => b.order === (bookIndex + 1));

        const dailyGospel = {
            id: `daily-${dateSeed}`,
            date: today.toISOString(),
            meaning: "Today's Word for spiritual nourishment, meditation, and peace.",
            verse: {
                id: `v-${dateSeed}`,
                number: parseInt(selectedVerseData.Verseid) || (verseIndex + 1),
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES.find(l => l.code === 'en'),
                        text: selectedVerseData.Verse
                    }
                ],
                chapter: {
                    number: chapterIndex + 1,
                    book: {
                        name: bookDef?.name || "Unknown Book"
                    }
                }
            }
        };

        return NextResponse.json(dailyGospel);
    } catch (error) {
        console.error("Failed to fetch static Daily Gospel:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
