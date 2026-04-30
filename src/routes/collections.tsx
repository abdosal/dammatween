import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import suitsImg from "@/assets/collection-suits.jpg";
import jacketsImg from "@/assets/collection-jackets.jpg";
import shirtsImg from "@/assets/collection-shirts.jpg";
import trousersImg from "@/assets/collection-trousers.jpg";
import shoesImg from "@/assets/collection-shoes.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — DAMAT TWEEN Maroc | Suits, Jackets, Shirts & More" },
      { name: "description", content: "Discover the DAMAT TWEEN Maroc collections — suits, jackets, shirts, trousers, shoes and accessories crafted from Italian-inspired fabrics." },
      { property: "og:title", content: "DAMAT TWEEN Maroc Collections" },
      { property: "og:description", content: "Premium menswear collections crafted for the modern gentleman." },
      { property: "og:image", content: suitsImg },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  { name: "Suits", img: suitsImg, desc: "Tailored silhouettes crafted for presence, confidence and distinction.", count: "24 pieces" },
  { name: "Jackets", img: jacketsImg, desc: "Modern structure, refined fabrics, effortless elegance.", count: "18 pieces" },
  { name: "Shirts", img: shirtsImg, desc: "Clean lines, premium textures, everyday sophistication.", count: "32 pieces" },
  { name: "Trousers", img: trousersImg, desc: "Fluid lines, impeccable cut. The foundation of every wardrobe.", count: "21 pieces" },
  { name: "Shoes", img: shoesImg, desc: "Italian leather craftsmanship for considered footsteps.", count: "14 pieces" },
  { name: "Accessories", img: accessoriesImg, desc: "Ties, belts, cufflinks — the details that finish the gentleman.", count: "40+ pieces" },
];

function CollectionsPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal><p className="eyebrow text-graphite">— Collections · FW Edition</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              Refined silhouettes.<br/>
              <span className="italic">Premium fabrics.</span> Casablanca elegance.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-xl text-graphite leading-relaxed">
              Six categories, one philosophy. Each collection is curated with the modern
              gentleman in mind — from boardroom to ceremony, from weekend to evening.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-24 md:space-y-32">
          {items.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={c.name}>
                <article className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-7 img-zoom relative aspect-[5/6]">
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="md:col-span-5">
                    <p className="eyebrow-gold">0{i + 1} · {c.count}</p>
                    <h2 className="mt-6 display-lg text-ink">{c.name}</h2>
                    <p className="mt-6 text-graphite leading-relaxed text-lg">{c.desc}</p>
                    <Link to="/contact" className="mt-10 inline-flex items-center gap-3 group">
                      <span className="btn-outline-luxe">
                        <span>Discover</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
