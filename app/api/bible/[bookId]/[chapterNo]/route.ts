import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES, getKjvData } from "@/lib/bibleData";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ bookId: string; chapterNo: string }> }
) {
    try {
        const { bookId, chapterNo } = await params;

        const bookDef = BIBLE_BOOKS.find(b => b.id === bookId);
        if (!bookDef) {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });
        }

        const chapterNum = parseInt(chapterNo);
        const kjvData = await getKjvData();

        if (!kjvData) {
            return NextResponse.json({ error: "Bible dataset unavailable" }, { status: 500 });
        }

        const chapterVerses = kjvData.verses.filter(
            v => v.book === bookDef.order && v.chapter === chapterNum
        );

        if (chapterVerses.length === 0) {
            return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
        }

        const formattedChapter = {
            id: `${bookId}-ch-${chapterNo}`,
            number: chapterNum,
            bookId: bookId,
            verses: chapterVerses.map(v => ({
                number: v.verse,
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES[0],
                        text: v.text
                    }
                ]
            }))
        };

        return NextResponse.json(formattedChapter);
    } catch (error) {
        console.error("Failed to load KJV chapter:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
