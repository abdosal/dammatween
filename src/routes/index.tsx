import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-main.jpg";
import suitsImg from "@/assets/collection-suits.jpg";
import jacketsImg from "@/assets/collection-jackets.jpg";
import shirtsImg from "@/assets/collection-shirts.jpg";
import trousersImg from "@/assets/collection-trousers.jpg";
import shoesImg from "@/assets/collection-shoes.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";
import aboutCraftImg from "@/assets/about-craft.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAMAT TWEEN Maroc | Premium Men's Fashion & Luxury Suits in Casablanca" },
      {
        name: "description",
        content:
          "Refined menswear, crafted for confidence. DAMAT TWEEN Maroc brings international premium tailoring and Italian-inspired fabrics to Casablanca.",
      },
      { property: "og:title", content: "DAMAT TWEEN Maroc — Refined Menswear in Casablanca" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const collections = [
  { name: "Suits", img: suitsImg, desc: "Tailored silhouettes crafted for presence and distinction." },
  { name: "Jackets", img: jacketsImg, desc: "Modern structure, refined fabrics, effortless elegance." },
  { name: "Shirts", img: shirtsImg, desc: "Clean lines, premium textures, everyday sophistication." },
  { name: "Trousers", img: trousersImg, desc: "Fluid lines and impeccable cut for the modern silhouette." },
  { name: "Shoes", img: shoesImg, desc: "Italian leather craftsmanship for considered footsteps." },
  { name: "Accessories", img: accessoriesImg, desc: "The finishing details that complete a gentleman." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink text-ivory">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img
            src={heroImg}
            alt="Refined gentleman in tailored Italian-inspired suit at DAMAT TWEEN Casablanca"
            className="h-full w-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 md:px-10 pb-24 pt-40">
          <motion.p
            className="eyebrow-gold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Casablanca · Est. 2012
          </motion.p>

          <motion.h1
            className="mt-6 display-xl max-w-5xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Refined Menswear,<br />
            <span className="italic text-gold-soft">Crafted</span> for Confidence.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ivory/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            DAMAT TWEEN Maroc brings international premium tailoring to Casablanca with elegant
            silhouettes and Italian-inspired fabrics.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Link to="/collections" className="btn-luxe">
              <span>Explore Collection</span>
              <ArrowRight className="h-3.5 w-3.5 relative z-10" />
            </Link>
            <Link to="/contact" className="btn-ghost-luxe">
              <span>Contact Us</span>
            </Link>
          </motion.div>
        </div>

        {/* Marquee bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-ink/40 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 md:px-10 py-5 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60">
            <span>Italian-Inspired Fabrics</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Premium Tailoring</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Casablanca Atelier</span>
            <span>Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-graphite">— The Maison</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-8 display-lg max-w-5xl text-ink">
              Elegance begins with precision. <span className="text-graphite italic">Tailoring made for presence.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed text-graphite">
                For more than a decade, DAMAT TWEEN Maroc has dressed the modern Casablanca
                gentleman with refined silhouettes, premium fabrics and an unwavering attention
                to fit.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base md:text-lg leading-relaxed text-graphite">
                An international premium franchise with the soul of an atelier — where every
                stitch, every drape, every detail is considered.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT FEATURE */}
      <section className="relative bg-ink text-ivory">
        <div className="grid md:grid-cols-2">
          <div className="img-zoom relative aspect-[4/5] md:aspect-auto md:min-h-[680px]">
            <img src={aboutCraftImg} alt="Tailor measuring suit" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center px-6 md:px-16 py-20">
            <Reveal>
              <p className="eyebrow-gold">— Heritage</p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mt-6 display-lg">
                A maison of <span className="italic text-gold-soft">considered</span> menswear.
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 text-ivory/75 leading-relaxed max-w-lg">
                Founded in 2012, DAMAT TWEEN Maroc is the Casablanca chapter of an international
                premium menswear franchise. We bring contemporary tailoring, Italian-inspired
                fabrics and elegant wardrobe essentials to the modern gentleman.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <ul className="mt-10 grid grid-cols-2 gap-6 text-sm">
                {[
                  ["12+", "Years in Casablanca"],
                  ["Italy", "Inspired Fabrics"],
                  ["Triangle d'Or", "Boutique Address"],
                  ["By Appointment", "Personal Styling"],
                ].map(([k, v]) => (
                  <li key={v} className="border-t border-white/15 pt-4">
                    <p className="font-display text-2xl">{k}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/60">{v}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.45}>
              <Link to="/about" className="mt-12 inline-flex items-center gap-3 eyebrow-gold link-underline">
                Discover the Maison <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <Reveal>
                <p className="eyebrow text-graphite">— Collections</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 display-lg text-ink max-w-3xl">
                  The wardrobe of the <span className="italic">modern gentleman</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/collections" className="eyebrow link-underline text-ink">
                View all categories →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <Link to="/collections" className="group block">
                  <div className="img-zoom relative aspect-[4/5] bg-charcoal">
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 eyebrow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl text-ink">{c.name}</h3>
                      <p className="mt-2 text-sm text-graphite leading-relaxed max-w-xs">{c.desc}</p>
                    </div>
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-ink/20 group-hover:bg-ink group-hover:text-ivory group-hover:border-ink transition-all duration-500">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIT EXPERIENCE TEASER */}
      <section className="relative overflow-hidden bg-charcoal text-ivory py-28 md:py-40">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow-gold">— A New Service</p>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="mt-6 display-xl">
                  The <span className="italic text-gold">DAMAT</span><br />Fit Experience.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.25}>
                <p className="text-ivory/75 leading-relaxed text-lg">
                  Our virtual fitting concierge guides you to your perfect silhouette before you
                  visit the boutique. Three steps, premium recommendations, refined results.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <Link to="/fit-experience" className="mt-10 btn-ghost-luxe">
                  <span>Begin Fitting</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/10">
            {[
              ["01", "Enter your measurements", "Height, chest, shoulders — refined inputs."],
              ["02", "Choose your preferred fit", "Slim, regular or comfort silhouette."],
              ["03", "Receive your recommendation", "A curated size and styling advice."],
            ].map(([n, t, d]) => (
              <Reveal key={n} delay={parseInt(n) * 0.1}>
                <div className="bg-charcoal p-10 h-full">
                  <p className="font-display text-5xl text-gold">{n}</p>
                  <h3 className="mt-6 font-display text-2xl">{t}</h3>
                  <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK PREVIEW */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <Reveal><p className="eyebrow text-graphite">— Lookbook</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 display-lg text-ink max-w-2xl">
                  Editorial <span className="italic">moments</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/lookbook" className="eyebrow link-underline text-ink">
                Open the gallery →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="img-zoom relative aspect-[16/10]">
                <img src={lookbook2} alt="Casablanca gentleman" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-ivory">
                  <span className="font-display text-xl">Casablanca Gentleman</span>
                  <span className="eyebrow text-ivory/80">FW · 01</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={0.15}>
              <div className="img-zoom relative aspect-[16/10] md:aspect-[4/5] md:h-full">
                <img src={lookbook3} alt="Business elegance" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-ivory">
                  <span className="font-display text-xl">Business Elegance</span>
                  <span className="eyebrow text-ivory/80">FW · 02</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-ink text-ivory py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <Reveal><p className="eyebrow-gold">— Visit the Boutique</p></Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 display-lg max-w-3xl mx-auto">
              Dress with intention. <span className="italic text-gold-soft">Speak with a Style Advisor.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/212522262991" target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe">
                <span>WhatsApp Concierge</span>
              </a>
              <Link to="/contact" className="btn-ghost-luxe">
                <span>Find the Boutique</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
