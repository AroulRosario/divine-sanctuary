import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-gold-soft selection:text-crimson-deep">
      {/* Hero Section with Cinematic Background */}
      <div className="relative h-screen w-full">
        <Image
          src="/assets/biblical_landscape_cinematic_1772525803435.png"
          alt="Divine Sanctuary Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment/10 to-parchment" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif text-gold-soft mb-6 drop-shadow-2xl animate-fade-in">
            The Divine Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-parchment/90 max-w-2xl font-light italic mb-10">
            "Thy word is a lamp unto my feet, and a light unto my path."
          </p>
          <div className="flex gap-6">
            <Link href="/bible" className="glass px-8 py-4 text-lg font-medium text-crimson-deep transition-all holy-glow rounded-full">
              Explore Scripture
            </Link>
            <Link href="/store" className="bg-crimson-deep text-parchment px-8 py-4 text-lg font-medium transition-all hover:bg-opacity-90 rounded-full shadow-lg">
              Sanctuary Store
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="relative py-24 px-6 md:px-24 bg-parchment text-crimson-deep">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-8 rounded-3xl transition-all holy-glow flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/assets/rosary_cathedral_light_1772525530668.png"
                alt="Multilingual Bible"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4">Multilingual Bible</h3>
            <p className="opacity-80">Read the Word in your heart language. Supporting 7 Indic languages alongside English.</p>
          </div>

          <div className="glass p-8 rounded-3xl transition-all holy-glow flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/assets/stained_glass_reflections_1772525788785.png"
                alt="Daily Gospel"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4">Daily Bread</h3>
            <p className="opacity-80">Fresh insights and spiritual nourishment delivered to your soul every midnight.</p>
          </div>

          <div className="glass p-8 rounded-3xl transition-all holy-glow flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/assets/premium_bible_product_1772525818617.png"
                alt="Sanctuary Store"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4">Sanctuary Store</h3>
            <p className="opacity-80">Premium religious goods, Bibles, and sacramentals to aid your prayer life.</p>
          </div>
        </div>
      </section>

      {/* Spiritual Helper Trigger (Mock) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="glass holy-glow p-4 rounded-full flex items-center gap-3 text-crimson-deep font-medium shadow-2xl">
          <span className="w-10 h-10 bg-gold-soft rounded-full flex items-center justify-center text-parchment animate-pulse">🙏</span>
          Spiritual Helper
        </button>
      </div>
    </div>
  );
}
