import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const books = await prisma.book.findMany({
            orderBy: { order: "asc" },
            include: {
                _count: {
                    select: { chapters: true }
                }
            }
        });

        const languages = await prisma.language.findMany();

        return NextResponse.json({ books, languages });
    } catch (error) {
        console.error("Failed to fetch Bible metadata:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
