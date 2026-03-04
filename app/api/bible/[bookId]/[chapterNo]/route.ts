import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ bookId: string; chapterNo: string }> }
) {
    try {
        const { bookId, chapterNo } = await params;

        const chapter = await prisma.chapter.findFirst({
            where: {
                bookId: bookId,
                number: parseInt(chapterNo)
            },
            include: {
                verses: {
                    orderBy: { number: "asc" },
                    include: {
                        translations: {
                            include: {
                                language: true
                            }
                        }
                    }
                }
            }
        });

        if (!chapter) {
            return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
        }

        return NextResponse.json(chapter);
    } catch (error) {
        console.error("Failed to fetch Bible chapter:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
