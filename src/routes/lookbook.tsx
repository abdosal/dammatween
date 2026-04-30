import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import suitsImg from "@/assets/collection-suits.jpg";
import jacketsImg from "@/assets/collection-jackets.jpg";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — DAMAT TWEEN Maroc | Editorial Menswear Campaign" },
      { name: "description", content: "Editorial campaign images and styling inspiration from DAMAT TWEEN Maroc — premium menswear in Casablanca." },
      { property: "og:title", content: "DAMAT TWEEN Maroc Lookbook" },
      { property: "og:description", content: "Editorial moments in refined menswear." },
      { property: "og:image", content: lookbook2 },
    ],
  }),
  component: LookbookPage,
});

const looks: { img: string; caption: string; meta: string; span?: string }[] = [
  { img: lookbook2, caption: "Casablanca Gentleman", meta: "FW · 01", span: "md:col-span-8 md:row-span-2 aspect-[4/5]" },
  { img: lookbook1, caption: "Evening Refinement", meta: "FW · 02", span: "md:col-span-4 aspect-[4/5]" },
  { img: jacketsImg, caption: "Modern Tailoring", meta: "FW · 03", span: "md:col-span-4 aspect-[4/5]" },
  { img: lookbook3, caption: "Business Elegance", meta: "FW · 04", span: "md:col-span-7 aspect-[4/3]" },
  { img: suitsImg, caption: "Quiet Luxury", meta: "FW · 05", span: "md:col-span-5 aspect-[4/5]" },
  { img: lookbook4, caption: "Weekend Sophistication", meta: "FW · 06", span: "md:col-span-12 aspect-[16/9]" },
];

function LookbookPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal><p className="eyebrow text-graphite">— Lookbook FW Edition</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              Editorial <span className="italic">moments</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-xl text-graphite leading-relaxed">
              Campaign imagery, styling inspiration and the silhouettes that define a season.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {looks.map((l, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={`group relative ${l.span ?? "md:col-span-6 aspect-[4/5]"}`}>
              <div className="img-zoom relative h-full w-full overflow-hidden">
                <img src={l.img} alt={l.caption} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-ivory translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <span className="font-display text-2xl">{l.caption}</span>
                  <span className="eyebrow text-ivory/80">{l.meta}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
