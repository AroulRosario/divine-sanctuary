import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES, fetchKjvData } from "@/lib/bibleData";

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
        const kjvData = fetchKjvData();

        if (!kjvData) {
            return NextResponse.json({ error: "Bible dataset not found" }, { status: 500 });
        }

        // The KJV JSON is perfectly structured as a flat array of verses.
        // We just filter by book order and chapter number.
        const chapterVerses = kjvData.verses.filter(
            v => v.book === bookDef.order && v.chapter === chapterNum
        );

        if (chapterVerses.length === 0) {
            return NextResponse.json({ error: "Chapter not fully found" }, { status: 404 });
        }

        const formattedChapter = {
            id: `${bookId}-ch-${chapterNo}`,
            number: chapterNum,
            bookId: bookId,
            verses: chapterVerses.map(v => ({
                number: v.verse,
                translations: [
                    {
                        language: SUPPORTED_LANGUAGES[0], // English KJV
                        text: v.text
                    }
                ]
            }))
        };

        return NextResponse.json(formattedChapter);
    } catch (error) {
        console.error("Failed to parse local KJV chapter:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
