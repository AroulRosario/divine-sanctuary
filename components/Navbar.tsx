"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, ShoppingBag, Radio, Sparkles, Home } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "The Word", href: "/bible", icon: BookOpen },
    { name: "Daily Bread", href: "/daily", icon: Sparkles },
    { name: "Sermons", href: "/sermons", icon: Radio },
    { name: "Sanctuary Boutique", href: "/store", icon: ShoppingBag },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-[100] transition-all duration-500 ease-in-out px-6 md:px-12",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl mx-auto rounded-full transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-10 border border-transparent",
                    isScrolled
                        ? "bg-white/70 backdrop-blur-2xl shadow-2xl border-gold-soft/20 py-3"
                        : "bg-transparent py-2"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-10 h-10 bg-crimson-deep rounded-full flex items-center justify-center text-parchment shadow-lg shadow-crimson-deep/20"
                    >
                        ✨
                    </motion.div>
                    <span
                        className={cn(
                            "text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
                            isScrolled ? "text-crimson-deep" : "text-gold-soft drop-shadow-md"
                        )}
                    >
                        Divine Sanctuary
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group relative text-sm font-medium uppercase tracking-widest transition-all hover:scale-105",
                                pathname === item.href
                                    ? (isScrolled ? "text-crimson-deep" : "text-white")
                                    : (isScrolled ? "text-crimson-deep/60 hover:text-crimson-deep" : "text-parchment/70 hover:text-white")
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className={cn(
                                        "absolute -bottom-1 left-0 right-0 h-px",
                                        isScrolled ? "bg-crimson-deep" : "bg-gold-soft"
                                    )}
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/store"
                        className={cn(
                            "ml-4 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95",
                            isScrolled
                                ? "bg-crimson-deep text-parchment shadow-lg"
                                : "glass text-parchment hover:bg-gold-soft hover:text-crimson-deep"
                        )}
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                        "lg:hidden p-2 rounded-full transition-colors",
                        isScrolled ? "text-crimson-deep hover:bg-crimson-deep/5" : "text-parchment hover:bg-white/10"
                    )}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="lg:hidden absolute top-24 inset-x-6 z-50 rounded-[2.5rem] bg-white/95 backdrop-blur-3xl shadow-3xl border border-gold-soft/20 p-8 flex flex-col gap-6"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-4 text-lg font-serif transition-all px-4 py-3 rounded-2xl",
                                    pathname === item.href
                                        ? "bg-crimson-deep/5 text-crimson-deep font-bold"
                                        : "text-crimson-deep/60 hover:bg-crimson-deep/5 hover:text-crimson-deep"
                                )}
                            >
                                <item.icon size={20} className="text-gold-soft" />
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/store"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 bg-crimson-deep text-parchment py-4 rounded-2xl text-center font-bold uppercase tracking-[0.2em] shadow-xl shadow-crimson-deep/20"
                        >
                            Enter Sanctuary Store
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
