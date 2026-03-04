import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        // Simple compassionate bot logic
        const allVerses = await prisma.verse.findMany({
            include: {
                translations: { where: { language: { code: 'en' } } },
                chapter: { include: { book: true } }
            }
        });

        const randomVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
        const verseText = randomVerse.translations[0]?.text || "God is with you.";
        const reference = `${randomVerse.chapter.book.name} ${randomVerse.chapter.number}:${randomVerse.number}`;

        const response = `Bless you. I understand your heart. Remember the Word: "${verseText}" (${reference}). How else can I pray for you today?`;

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Chatbot error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
