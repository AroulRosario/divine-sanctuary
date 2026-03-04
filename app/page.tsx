"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ShoppingBag, Sparkles, Radio, ArrowRight, Quote, Heart, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-parchment text-crimson-deep selection:bg-gold-soft selection:text-crimson-deep transition-colors duration-700">

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src="/assets/biblical_landscape_cinematic_1772525803435.png"
            alt="Divine Sanctuary Hero"
            fill
            className="object-cover brightness-[0.45] saturate-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-parchment" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-gold-soft uppercase tracking-[0.5em] text-sm font-bold mb-6 block drop-shadow-lg">Establish 2026</span>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 leading-[0.9] drop-shadow-2xl">
              The Divine <br /> <span className="text-gold-soft italic">Sanctuary</span>
            </h1>
            <p className="text-xl md:text-3xl text-parchment/90 max-w-3xl mx-auto font-serif italic mb-12 drop-shadow-md leading-relaxed">
              "Thy word is a lamp unto my feet, and a light unto my path."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/bible"
                className="group relative px-10 py-5 bg-gold-soft text-crimson-deep font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Explore Scripture</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              <Link
                href="/store"
                className="group px-10 py-5 glass text-white font-bold uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/10 transition-all shadow-xl"
              >
                Sanctuary Store
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold-soft to-transparent" />
          <span className="text-[10px] uppercase tracking-widest text-crimson-deep font-bold">Scroll to Worship</span>
        </motion.div>
      </section>

      {/* 2. Daily Inspiration (The Word) */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-gold-soft">
              <Sparkles size={32} />
              <span className="uppercase tracking-[0.3em] font-bold text-sm">Today's Reflection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-crimson-deep leading-tight">
              A Word for <br /> Your Soul
            </h2>
            <div className="glass p-10 rounded-[3rem] border border-gold-soft/20 shadow-2xl relative holy-glow bg-white/40">
              <Quote className="absolute -top-6 -left-6 w-16 h-16 text-gold-soft/20" />
              <p className="text-2xl md:text-3xl font-serif italic text-crimson-deep/90 leading-relaxed mb-8">
                "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth."
              </p>
              <div className="flex items-center gap-4 border-t border-gold-soft/10 pt-6">
                <div className="w-12 h-12 bg-crimson-deep rounded-full flex items-center justify-center text-white">✨</div>
                <div>
                  <p className="font-bold text-lg">Psalm 46:10</p>
                  <p className="text-sm opacity-60">The Word of the Lord</p>
                </div>
              </div>
            </div>
            <Link href="/daily" className="inline-flex items-center gap-3 text-crimson-deep font-bold uppercase tracking-widest hover:text-gold-soft transition-colors group">
              View Daily Bread <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl rotate-2"
          >
            <Image
              src="/assets/stained_glass_reflections_1772525788785.png"
              alt="Daily Reflection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-3xl font-serif italic mb-2">Sacred Light</p>
              <p className="text-sm opacity-80 uppercase tracking-widest">Captured in the Sanctuary</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Multilingual Hub */}
      <section className="relative py-32 bg-crimson-deep text-parchment overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/biblical_landscape_cinematic_1772525803435.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-gold-soft mb-8">God's Word <br /> In Your Language</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-80 font-serif leading-relaxed">
              We bring the complete Bible to you in English and 7 major Indic languages, preserved in their original holy context.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Bengali', 'Marathi'].map((lang, idx) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark p-8 rounded-[2.5rem] border border-white/10 hover:border-gold-soft/50 group cursor-default transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-soft mb-6 group-hover:scale-125 transition-transform group-hover:rotate-12">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-2">{lang}</h3>
                <p className="text-xs opacity-50 uppercase tracking-widest">Full Translation</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-white/10"
          >
            <Link href="/bible" className="glass py-5 px-12 rounded-full text-gold-soft font-bold uppercase tracking-widest hover:bg-gold-soft hover:text-crimson-deep transition-all shadow-2xl">
              Open the Holy Reader
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. Sanctuary Boutique (Ecommerce Preview) */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gold-soft">
                <ShoppingBag size={32} />
                <span className="uppercase tracking-[0.3em] font-bold text-sm">Curated Collection</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-crimson-deep leading-tight">Tokens of <br /> Faith</h2>
            </div>
            <Link href="/store" className="text-lg font-bold uppercase tracking-widest text-crimson-deep flex items-center gap-3 group">
              Enter the Boutique <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Golden Leaf Bible", img: "/assets/premium_bible_product_1772525818617.png", price: "₹4500", label: "Special Edition" },
              { name: "Olive Wood Rosary", img: "/assets/rosary_cathedral_light_1772525530668.png", price: "₹1200", label: "Handmade" },
              { name: "Beeswax Candles", img: "/assets/premium_candle_product_1772525834625.png", price: "₹850", label: "Pure Altar" }
            ].map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:shadow-golden group-hover:-translate-y-2">
                  <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all" />
                  <div className="absolute top-8 left-8">
                    <span className="glass py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {product.label}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-3xl font-serif mb-2 group-hover:text-gold-soft transition-colors tracking-tight">{product.name}</h3>
                  <p className="text-xl font-medium text-crimson-deep opacity-60 italic">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Sermon section */}
      <section className="relative py-32 px-6 bg-parchment/80 border-y border-gold-soft/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-4xl mb-16 holy-glow group"
          >
            <Image src="/assets/biblical_landscape_cinematic_1772525803435.png" alt="Featured Sermon" fill className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <div className="w-20 h-20 bg-gold-soft rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse">
                <Radio className="text-crimson-deep w-10 h-10 ml-1" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.5em] mb-4 text-gold-soft">Sermon of the Week</p>
              <h2 className="text-4xl md:text-6xl font-serif max-w-3xl mb-8 leading-tight">Walking with Jesus in the Modern World</h2>
              <Link href="/sermons" className="bg-white text-crimson-deep px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all">Watch Now</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Testimonials section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-20">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif text-crimson-deep tracking-tight">Witness the Grace</h2>
            <div className="w-24 h-px bg-gold-soft mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "The parallel Bible has completely changed how I study the Word in Hindi and English.", author: "Arun Kumar", role: "Daily Reader" },
              { text: "The aesthetic of the sanctuary is so calming. It truly feels like a holy space online.", author: "Maria S.", role: "Prayer Group Leader" },
              { text: "Beautiful products and amazing spiritual guidance through the chatbot.", author: "James Wilson", role: "Store Customer" }
            ].map((witness, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass p-10 rounded-[3rem] border border-gold-soft/10 relative"
              >
                <Quote className="text-gold-soft/30 w-10 h-10 mb-6 mx-auto" />
                <p className="text-lg font-serif italic mb-8 opacity-80 leading-relaxed">"{witness.text}"</p>
                <div className="space-y-1">
                  <p className="font-bold text-crimson-deep">{witness.author}</p>
                  <p className="text-xs uppercase tracking-widest text-gold-soft">{witness.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Holy Footer */}
      <footer className="relative bg-crimson-deep text-parchment pt-32 pb-12 overflow-hidden border-t border-gold-soft/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-soft rounded-full flex items-center justify-center text-crimson-deep">✨</div>
                <span className="text-3xl font-serif font-bold tracking-tight text-white italic">Divine Sanctuary</span>
              </div>
              <p className="text-xl max-w-sm opacity-60 font-serif italic leading-relaxed">
                Bringing the Word of God to every screen, in every heart language, with premium craftsmanship.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold-soft hover:text-crimson-deep transition-all cursor-pointer">
                    {i === 1 ? 'f' : i === 2 ? 'i' : i === 3 ? 't' : 'y'}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-gold-soft font-bold uppercase tracking-[0.3em] text-xs">Navigate</h4>
              <nav className="flex flex-col gap-4 text-sm opacity-60 font-medium tracking-widest">
                <Link href="/bible" className="hover:text-gold-soft transition-colors">The Holy Bible</Link>
                <Link href="/daily" className="hover:text-gold-soft transition-colors">Daily Bread</Link>
                <Link href="/sermons" className="hover:text-gold-soft transition-colors">Sermons</Link>
                <Link href="/store" className="hover:text-gold-soft transition-colors">Boutique</Link>
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-gold-soft font-bold uppercase tracking-[0.3em] text-xs">Connected</h4>
              <p className="text-sm opacity-60 mb-6">Join our sanctuary for weekly reflections and special store offers.</p>
              <div className="flex items-center border-b border-gold-soft/30 pb-2 gap-2 group">
                <input
                  type="email"
                  placeholder="Your journey starts here..."
                  className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-white/20"
                />
                <button className="text-gold-soft group-hover:translate-x-1 transition-transform">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-[10px] uppercase tracking-[0.3em] font-bold">
            <p>© 2026 The Divine Sanctuary. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span className="cursor-pointer hover:text-gold-soft">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gold-soft">Terms of Faith</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Visual Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <Image src="/assets/stained_glass_reflections_1772525788785.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
}
