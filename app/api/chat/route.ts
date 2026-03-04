import { NextResponse } from "next/server";
import { fetchBibleJson } from "@/lib/bibleData";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        // Fetch English Bible for random compassionate verse
        let verseText = "God is our refuge and strength, a very present help in trouble.";
        let reference = "Psalms 46:1";

        try {
            const englishData = await fetchBibleJson('English');
            if (englishData && englishData.Book && englishData.Book.length > 18) {
                // Book 19=Psalms (index 18)
                const psalms = englishData.Book[18];
                if (psalms && psalms.Chapter) {
                    const randomChapterNum = Math.floor(Math.random() * psalms.Chapter.length);
                    const chapter = psalms.Chapter[randomChapterNum];
                    if (chapter && chapter.Verse && chapter.Verse.length > 0) {
                        const randomVerseNum = Math.floor(Math.random() * chapter.Verse.length);
                        const verse = chapter.Verse[randomVerseNum];

                        verseText = verse.Verse;
                        reference = `Psalms ${randomChapterNum + 1}:${parseInt(verse.Verseid) || (randomVerseNum + 1)}`;
                    }
                }
            }
        } catch (e) {
            console.error("Chat data error:", e);
        }

        const response = `Bless you. I hear your heart in saying "${message.substring(0, 30)}...". Remember the Word: "${verseText}" (${reference}). How else can I pray for you today?`;

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Chatbot error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
