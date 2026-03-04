"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Sermon {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
}

export default function SermonsPage() {
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/sermons")
            .then(res => res.json())
            .then(data => {
                setSermons(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-parchment text-crimson-deep">
            <header className="glass px-6 py-6 flex items-center justify-between border-b border-gold-soft/20 backdrop-blur-xl">
                <Link href="/" className="text-2xl font-serif text-gold-soft drop-shadow-sm">The Divine Sanctuary</Link>
                <span className="text-xl font-serif italic text-gold-soft">Sermon Archive</span>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <p className="col-span-full text-center py-20 font-serif italic text-xl animate-pulse">Gathering the faithful... Loading sermons...</p>
                    ) : sermons.map(sermon => (
                        <div key={sermon.id} className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all holy-glow flex flex-col h-full">
                            <div className="relative h-64">
                                <Image src={sermon.thumbnail} alt={sermon.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-parchment">
                                    <span className="bg-gold-soft/80 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Featured</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif mb-3 leading-tight">{sermon.title}</h3>
                                <p className="text-sm opacity-80 mb-6 flex-1">{sermon.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs text-gold-soft italic">{new Date(sermon.publishedAt).toLocaleDateString()}</span>
                                    <button className="bg-crimson-deep text-parchment px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Watch Sermon</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
