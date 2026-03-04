"use client";

import { useState } from "react";

export default function SpiritualHelper() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([
        { role: "bot", text: "Peace be with you. I am your Spiritual Helper. How can I assist you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({ message: input }),
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: "bot", text: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "bot", text: "I'm having trouble connecting to the Spirit right now. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {isOpen ? (
                <div className="glass w-80 md:w-96 h-[450px] rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-gold-soft/30 animate-scale-in">
                    {/* Header */}
                    <div className="bg-crimson-deep p-4 text-parchment flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🙏</span>
                            <span className="font-serif font-medium">Spiritual Helper</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">✕</button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-parchment/50">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${m.role === "user" ? "bg-crimson-deep text-parchment" : "glass text-crimson-deep border-gold-soft/20"}`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="text-gold-soft text-xs animate-pulse italic">Thinking of a Word...</div>}
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white/50 border-t border-gold-soft/10 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask for prayer or scripture..."
                            className="flex-1 bg-transparent outline-none text-sm text-crimson-deep"
                        />
                        <button onClick={sendMessage} className="text-gold-soft hover:scale-110 transition-transform">🕊️</button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="glass holy-glow p-4 rounded-full flex items-center gap-3 text-crimson-deep font-medium shadow-2xl group animate-bounce-subtle"
                >
                    <div className="w-10 h-10 bg-gold-soft rounded-full flex items-center justify-center text-parchment group-hover:rotate-12 transition-transform">
                        ✨
                    </div>
                    <span className="pr-2">Spiritual Helper</span>
                </button>
            )}
        </div>
    );
}
