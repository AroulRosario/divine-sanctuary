"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export default function StorePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-parchment text-crimson-deep">
            {/* Premium Store Header */}
            <header className="glass px-6 py-4 flex items-center justify-between border-b border-gold-soft/20 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="text-2xl font-serif text-gold-soft tracking-tight">Sanctuary Store</Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest opacity-70">
                        <span className="hover:text-gold-soft cursor-pointer">Bibles</span>
                        <span className="hover:text-gold-soft cursor-pointer">Rosaries</span>
                        <span className="hover:text-gold-soft cursor-pointer">Candles</span>
                    </nav>
                    <button className="relative p-2 glass rounded-full holy-glow">
                        🛒
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-gold-soft text-parchment text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
                    </button>
                </div>
            </header>

            {/* Hero Banner */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <Image src="/assets/biblical_landscape_cinematic_1772525803435.png" alt="Sanctuary" fill className="object-cover brightness-50" />
                <div className="relative text-center text-parchment px-6">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-xl">Tokens of Faith</h1>
                    <p className="text-xl font-serif italic max-w-2xl mx-auto opacity-90 underline decor-gold-soft decoration-1">Beautifully crafted essentials for your spiritual journey.</p>
                </div>
            </section>

            {/* Product Grid */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => <div key={i} className="h-96 bg-gold-soft/10 rounded-3xl animate-pulse" />)}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {products.map(product => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl transition-all group-hover:shadow-golden group-hover:-translate-y-2">
                                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all" />
                                    <button
                                        onClick={() => setCartCount(prev => prev + 1)}
                                        className="absolute bottom-6 right-6 glass w-12 h-12 rounded-full flex items-center justify-center text-xl opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="px-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft mb-2 block">{product.category}</span>
                                    <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
                                    <p className="text-sm opacity-60 mb-4 line-clamp-2">{product.description}</p>
                                    <p className="text-xl font-semibold text-crimson-deep">₹{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer Quote */}
            <footer className="py-20 text-center border-t border-gold-soft/10 bg-white/30 backdrop-blur-sm">
                <p className="font-serif italic text-2xl text-gold-soft mb-4">"And God said, Let there be light: and there was light."</p>
                <p className="text-sm opacity-50 uppercase tracking-widest">The Divine Sanctuary • Established 2026</p>
            </footer>
        </div>
    );
}
