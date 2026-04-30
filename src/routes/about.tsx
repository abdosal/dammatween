import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import aboutCraft from "@/assets/about-craft.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DAMAT TWEEN Maroc | A Maison of Refined Menswear in Casablanca" },
      { name: "description", content: "Founded in 2012, DAMAT TWEEN Maroc is an international premium men's fashion franchise dedicated to refined tailoring and Italian-inspired fabrics in Casablanca." },
      { property: "og:title", content: "About DAMAT TWEEN Maroc — Refined Menswear since 2012" },
      { property: "og:description", content: "An international premium menswear franchise rooted in Casablanca." },
      { property: "og:image", content: aboutCraft },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal><p className="eyebrow text-graphite">— The Maison · Est. 2012</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              A maison of <span className="italic">refined</span> menswear, rooted in Casablanca.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 text-lg leading-relaxed text-graphite max-w-2xl">
              DAMAT TWEEN Maroc is an international premium men's fashion franchise founded in
              2012, bringing refined tailoring, contemporary menswear and elegant wardrobe
              essentials to the modern gentleman of Casablanca.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <div className="img-zoom relative aspect-[4/3]">
              <img src={aboutCraft} alt="Atelier craftsmanship" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:pt-16" delay={0.15}>
            <p className="eyebrow-gold">— Philosophy</p>
            <h2 className="mt-6 display-md text-ink">
              Precision over noise.<br/><span className="italic text-graphite">Quality over trend.</span>
            </h2>
            <p className="mt-6 text-graphite leading-relaxed">
              Every silhouette is shaped to honour the man who wears it — confident, considered,
              never ostentatious. We believe luxury lives in the details: the drape of a wool,
              the curve of a lapel, the silence of a perfect fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal><p className="eyebrow-gold">— What we stand for</p></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-white/10">
            {[
              ["International Franchise", "Part of a global premium menswear network."],
              ["Founded in 2012", "Over a decade of dressing the Casablanca gentleman."],
              ["Italian-Inspired Fabrics", "Wools, linens and cottons of refined origin."],
              ["Elegant Menswear", "Suits, jackets, shirts, trousers, shoes, accessories."],
              ["Casablanca Presence", "A boutique address in the Triangle d'Or."],
              ["Modern Gentleman", "A wardrobe for the confident contemporary man."],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink p-10">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="img-zoom relative aspect-[4/5]">
              <img src={lookbook1} alt="Editorial portrait" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="img-zoom relative aspect-[4/5]">
              <img src={lookbook2} alt="Casablanca elegance" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-20 text-center">
          <Reveal>
            <h2 className="display-md max-w-3xl mx-auto text-ink">
              "Modern menswear for the <span className="italic">confident gentleman</span>."
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/collections" className="btn-outline-luxe mt-10"><span>Explore the Collections</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
