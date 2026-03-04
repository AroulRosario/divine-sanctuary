import { NextResponse } from "next/server";
import { BIBLE_BOOKS, SUPPORTED_LANGUAGES } from "@/lib/bibleData";

export async function GET(request: Request) {
    try {
        // Return static books array mapped to the UI structure
        const books = BIBLE_BOOKS.map(b => ({
            id: b.id,
            order: b.order,
            name: b.name,
            abbreviation: b.abbreviation,
            _count: { chapters: 50 }, // Approximation to generic chapters since static files don't index upfront easily
        }));

        const languages = SUPPORTED_LANGUAGES.map(l => ({
            id: l.code,
            code: l.code,
            name: l.name,
        }));

        return NextResponse.json({ books, languages });
    } catch (error) {
        console.error("Failed to fetch static Bible metadata:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
