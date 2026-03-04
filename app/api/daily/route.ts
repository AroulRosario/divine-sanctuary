import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const today = new Array(new Date().setHours(0, 0, 0, 0))[0];

        let dailyGospel = await prisma.dailyGospel.findFirst({
            where: {
                date: new Date(today)
            },
            include: {
                verse: {
                    include: {
                        translations: {
                            include: { language: true }
                        },
                        chapter: {
                            include: { book: true }
                        }
                    }
                },
                language: true
            }
        });

        // Fallback: If no gospel for today, pick a random one from seeded verses for demo
        if (!dailyGospel) {
            const allVerses = await prisma.verse.findMany({
                include: {
                    translations: { include: { language: true } },
                    chapter: { include: { book: true } }
                }
            });

            if (allVerses.length > 0) {
                const randomVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
                const englishLang = await prisma.language.findUnique({ where: { code: 'en' } });

                if (englishLang) {
                    dailyGospel = await prisma.dailyGospel.create({
                        data: {
                            date: new Date(today),
                            meaning: "Today's Word for spiritual nourishment and meditation.",
                            verseId: randomVerse.id,
                            languageId: englishLang.id
                        },
                        include: {
                            verse: {
                                include: {
                                    translations: { include: { language: true } },
                                    chapter: { include: { book: true } }
                                }
                            },
                            language: true
                        }
                    });
                }
            }
        }

        return NextResponse.json(dailyGospel);
    } catch (error) {
        console.error("Failed to fetch Daily Gospel:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
