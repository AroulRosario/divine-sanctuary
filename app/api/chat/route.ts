import { NextResponse } from "next/server";
import { getKjvData } from "@/lib/bibleData";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        let verseText = "God is our refuge and strength, a very present help in trouble.";
        let reference = "Psalms 46:1";

        try {
            const kjvData = await getKjvData();
            if (kjvData && kjvData.verses && kjvData.verses.length > 0) {
                const psalmsVerses = kjvData.verses.filter(v => v.book === 19);
                if (psalmsVerses.length > 0) {
                    const randomIdx = Math.floor(Math.random() * psalmsVerses.length);
                    const verse = psalmsVerses[randomIdx];
                    verseText = verse.text;
                    reference = `Psalms ${verse.chapter}:${verse.verse}`;
                }
            }
        } catch (e) {
            console.error("Chat verse fetch error:", e);
        }

        const response = `Bless you. I hear your heart in saying "${message.substring(0, 30)}...". Remember the Word: "${verseText}" (${reference}). How else can I pray for you today?`;

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Chatbot error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
