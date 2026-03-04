import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES, fetchKjvData } from "@/lib/bibleData";

export async function GET() {
    try {
        const kjvData = fetchKjvData();

        if (!kjvData || !kjvData.verses || kjvData.verses.length === 0) {
            return NextResponse.json({ error: "Failed to fetch Daily Word" }, { status: 500 });
        }

        // To make it deterministic for the day, we can seed the random based on the date
        const today = new Date();
        const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

        // Pick a completely random index deterministic to the day
        const verseIndex = dateSeed % kjvData.verses.length;
        const selectedVerseData = kjvData.verses[verseIndex];

        const bookDef = BIBLE_BOOKS.find(b => b.order === selectedVerseData.book);

        const dailyGospel = {
            id: `daily-${dateSeed}`,
            date: today.toISOString(),
            meaning: "Today's Word for spiritual nourishment, meditation, and peace.",
            verse: {
                id: `v-${dateSeed}`,
                number: selectedVerseData.verse,
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES[0],
                        text: selectedVerseData.text
                    }
                ],
                chapter: {
                    number: selectedVerseData.chapter,
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
