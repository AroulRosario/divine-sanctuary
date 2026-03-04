"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Language {
    id: string;
    code: string;
    name: string;
}

interface Book {
    id: string;
    name: string;
    abbreviation: string;
}

interface Translation {
    language: Language;
    text: string;
}

interface Verse {
    number: number;
    translations: Translation[];
}

interface Chapter {
    number: number;
    verses: Verse[];
}

export default function BiblePage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [languages, setLanguages] = useState<Language[]>([]);
    const [selectedBook, setSelectedBook] = useState<string>("");
    const [selectedChapter, setSelectedChapter] = useState<number>(1);
    const [chapterData, setChapterData] = useState<Chapter | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/api/bible/metadata")
            .then((res) => {
                if (!res.ok) throw new Error("Divine Connection Lost");
                return res.json();
            })
            .then((data) => {
                const booksData = data.books || [];
                const langsData = data.languages || [];
                setBooks(booksData);
                setLanguages(langsData);
                if (booksData.length > 0) {
                    setSelectedBook(booksData.find((b: any) => b.name === "John")?.id || booksData[0].id);
                }
            })
            .catch(err => {
                console.error("Connection Error:", err);
            });
    }, []);

    useEffect(() => {
        if (selectedBook) {
            setLoading(true);
            fetch(`/api/bible/${selectedBook}/${selectedChapter}`)
                .then((res) => {
                    if (!res.ok) throw new Error("Chapter Loading Failed");
                    return res.json();
                })
                .then((data) => {
                    if (data.error) throw new Error(data.error);
                    setChapterData(data);
                })
                .catch(err => {
                    console.error("Chapter Error:", err);
                    setChapterData({ number: selectedChapter, verses: [] });
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [selectedBook, selectedChapter]);

    const getTranslation = (verse: Verse, langCode: string) => {
        return verse.translations.find((t) => t.language.code === langCode)?.text || "---";
    };

    return (
        <div className="min-h-screen bg-parchment text-crimson-deep selection:bg-gold-soft selection:text-crimson-deep">
            {/* Immersive Header */}
            <header className="glass sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gold-soft/20 backdrop-blur-xl">
                <Link href="/" className="text-2xl font-serif text-gold-soft drop-shadow-sm hover:scale-105 transition-transform">
                    The Divine Sanctuary
                </Link>

                <div className="flex flex-wrap items-center gap-4">
                    <select
                        value={selectedBook}
                        onChange={(e) => setSelectedBook(e.target.value)}
                        className="bg-transparent border border-gold-soft/30 rounded-full px-4 py-2 outline-none focus:border-gold-soft transition-all"
                    >
                        {books.map((book) => (
                            <option key={book.id} value={book.id}>{book.name}</option>
                        ))}
                    </select>

                    <select
                        value={selectedChapter}
                        onChange={(e) => setSelectedChapter(parseInt(e.target.value))}
                        className="bg-transparent border border-gold-soft/30 rounded-full px-4 py-2 outline-none focus:border-gold-soft transition-all w-20"
                    >
                        {[...Array(50)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>
            </header>

            {/* Hero Background Texture */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
                <Image src="/assets/stained_glass_reflections_1772525788785.png" alt="" fill className="object-cover" />
            </div>

            <main className="relative max-w-7xl mx-auto px-6 py-12">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 animate-pulse">
                        <span className="text-gold-soft text-4xl mb-4">🙏</span>
                        <p className="font-serif italic text-xl">Peace be with you. Loading the Word...</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-serif text-crimson-deep mb-2">
                                {books.find(b => b.id === selectedBook)?.name}
                            </h2>
                            <p className="text-xl text-gold-soft font-serif">Chapter {selectedChapter}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-1 px-4 md:px-0 bg-gold-soft/10 rounded-3xl overflow-hidden shadow-2xl">
                            {chapterData?.verses && Array.isArray(chapterData.verses) && chapterData.verses.map((verse) => (
                                <div key={`verse-${verse.number}`} className="contents group">
                                    <div className="bg-parchment/80 p-6 md:p-8 transition-all hover:bg-white holy-glow relative">
                                        <span className="absolute top-4 left-4 text-xs font-bold text-gold-soft opacity-50">{verse.number}</span>
                                        <p className="text-lg md:text-xl leading-relaxed text-slate-800">
                                            {getTranslation(verse, 'en')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {(!chapterData?.verses || !Array.isArray(chapterData.verses) || chapterData.verses.length === 0) && (
                            <div className="text-center py-20 glass rounded-3xl">
                                <p className="text-2xl font-serif italic text-crimson-deep/60">"Thy Word is infinite, though this chapter yet awaits."</p>
                                <p className="mt-4 text-gold-soft">The API could not fetch this chapter. Please try another book or chapter.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* Floating Action Button for Sanctuary Helper */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="glass holy-glow p-4 rounded-full flex items-center gap-3 text-crimson-deep font-medium shadow-2xl group">
                    <div className="w-10 h-10 bg-gold-soft rounded-full flex items-center justify-center text-parchment group-hover:rotate-12 transition-transform">
                        ✨
                    </div>
                    <span className="pr-2">Spiritual Helper</span>
                </button>
            </div>
        </div>
    );
}
