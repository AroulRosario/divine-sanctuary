import { NextResponse } from "next/server";
import { fetchRandomVerse } from "@/lib/bibleData";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        let verseText = "God is our refuge and strength, a very present help in trouble.";
        let reference = "Psalms 46:1";

        try {
            const verse = await fetchRandomVerse('psalms');
            if (verse) {
                verseText = verse.text.trim();
                reference = `Psalms ${verse.chapter}:${verse.verse}`;
            }
        } catch (e) {
            console.error("Chat verse fetch error:", e);
        }

        const response = `Bless you, dear soul. I hear your heart. Remember the Word: "${verseText}" (${reference}). May this scripture bring you peace and strength. How else can I support you today?`;

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Chatbot error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
