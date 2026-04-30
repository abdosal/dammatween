import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import accessoriesImg from "@/assets/collection-accessories.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DAMAT TWEEN Maroc | Personal Styling, Fittings & Advice" },
      { name: "description", content: "Personal styling, in-store fittings, suit size guidance and outfit coordination at DAMAT TWEEN Maroc Casablanca." },
      { property: "og:title", content: "Services — DAMAT TWEEN Maroc" },
      { property: "og:description", content: "Premium customer experience for the modern gentleman." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", t: "Personal Styling", d: "Refined guidance for business, ceremonies and everyday elegance." },
  { n: "02", t: "Fitting Assistance", d: "Our team helps you find the silhouette that matches your build and style." },
  { n: "03", t: "Suit Size Guidance", d: "Precise recommendations to ensure the perfect drape and proportion." },
  { n: "04", t: "Outfit Coordination", d: "Complete looks composed from suits, shirts, shoes and accessories." },
  { n: "05", t: "Customer Assistance", d: "A dedicated style advisor available by appointment or WhatsApp." },
  { n: "06", t: "Occasion Dressing", d: "From formal events to elevated daily wear — pieces that fit the moment." },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal><p className="eyebrow text-graphite">— Services</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              A boutique <span className="italic">experience</span>, considered to the detail.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-xl text-graphite leading-relaxed">
              From your first visit to your final adjustment, our advisors guide every step
              of dressing well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.1}>
              <div className="bg-ivory p-10 md:p-14 h-full hover:bg-bone transition-colors duration-500">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-5xl text-gold">{s.n}</span>
                  <h2 className="font-display text-3xl text-ink">{s.t}</h2>
                </div>
                <p className="mt-6 text-graphite leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={accessoriesImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-28 md:py-40 text-center">
          <Reveal><p className="eyebrow-gold">— Book a Style Advisor</p></Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 display-lg max-w-3xl mx-auto">
              Your wardrobe begins with a <span className="italic text-gold-soft">conversation</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/212522262991" className="btn-ghost-luxe"><span>WhatsApp Concierge</span></a>
              <Link to="/contact" className="btn-ghost-luxe"><span>Contact the Boutique</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
