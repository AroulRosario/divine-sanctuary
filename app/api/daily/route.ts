import { NextResponse } from "next/server";
import { SUPPORTED_LANGUAGES, fetchChapterFromApi } from "@/lib/bibleData";

export async function GET() {
    try {
        // Use Psalms 23 as the daily inspiration source
        const today = new Date();
        // Rotate between beautiful Psalms chapters based on day of year
        const psalmsChapters = [23, 91, 46, 1, 27, 139, 103, 121, 34, 37, 51, 100, 119, 145, 150];
        const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
        const chapterIdx = dayOfYear % psalmsChapters.length;
        const chapter = psalmsChapters[chapterIdx];

        const data = await fetchChapterFromApi('psalms', chapter);

        if (!data || !data.verses || data.verses.length === 0) {
            return NextResponse.json({ error: "Could not load daily verse" }, { status: 500 });
        }

        // Pick a verse based on the current date for daily consistency
        const verseIdx = today.getDate() % data.verses.length;
        const selectedVerse = data.verses[verseIdx];

        const dailyGospel = {
            id: `daily-${today.toISOString().split('T')[0]}`,
            date: today.toISOString(),
            meaning: "Today's Word from the Psalms — for your peace, strength, and spiritual nourishment.",
            verse: {
                id: `v-psalm-${chapter}-${selectedVerse.verse}`,
                number: selectedVerse.verse,
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES[0],
                        text: selectedVerse.text.trim()
                    }
                ],
                chapter: {
                    number: chapter,
                    book: {
                        name: "Psalms"
                    }
                }
            }
        };

        return NextResponse.json(dailyGospel);
    } catch (error) {
        console.error("Failed to fetch Daily Gospel:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
