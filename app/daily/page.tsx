"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DailyBreadPage() {
    const [gospel, setGospel] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/daily")
            .then(res => {
                if (!res.ok) throw new Error("Daily Bread not found");
                return res.json();
            })
            .then(data => {
                if (data && data.verse) {
                    setGospel(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Daily Error:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-parchment text-crimson-deep selection:bg-gold-soft selection:text-crimson-deep">
            <header className="glass px-6 py-4 flex items-center justify-between border-b border-gold-soft/20 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="text-2xl font-serif text-gold-soft">The Divine Sanctuary</Link>
                <span className="text-xl font-serif italic text-gold-soft">Daily Bread</span>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-16 text-center">
                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-10 w-64 bg-gold-soft/20 mx-auto rounded-full" />
                        <div className="h-32 w-full bg-gold-soft/10 rounded-3xl" />
                    </div>
                ) : gospel ? (
                    <div className="space-y-12">
                        <div className="relative">
                            <span className="text-gold-soft uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Gospel of the Day</span>
                            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                                {gospel.verse.chapter.book.name} {gospel.verse.chapter.number}:{gospel.verse.number}
                            </h1>
                            <div className="w-24 h-px bg-gold-soft mx-auto mb-12" />
                        </div>

                        <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl relative holy-glow">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-parchment rounded-full border border-gold-soft/20 flex items-center justify-center text-2xl">
                                🕊️
                            </div>
                            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-slate-800">
                                "{gospel.verse.translations[0]?.text}"
                            </p>
                            <div className="bg-gold-soft/5 p-6 rounded-2xl border border-gold-soft/10">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-gold-soft mb-3">The Message</h4>
                                <p className="text-lg opacity-90">{gospel.meaning}</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href="/bible" className="glass px-8 py-4 rounded-full text-gold-soft font-medium holy-glow transition-all">
                                Read Full Chapter
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>No gospel available for today. Please return tomorrow.</p>
                )}
            </main>
        </div>
    );
}
