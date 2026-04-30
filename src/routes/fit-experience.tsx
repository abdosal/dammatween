import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft, ArrowRight, Check, Ruler, Shirt, User2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/fit-experience")({
  head: () => ({
    meta: [
      { title: "Fit Experience — DAMAT TWEEN Maroc | Virtual Fitting Concierge" },
      { name: "description", content: "The DAMAT Fit Experience — an elegant virtual fitting concierge that recommends your perfect suit, shirt or jacket size before you visit our Casablanca boutique." },
      { property: "og:title", content: "The DAMAT Fit Experience" },
      { property: "og:description", content: "Virtual fitting concierge for refined menswear." },
    ],
  }),
  component: FitExperiencePage,
});

type Form = {
  product: string;
  fit: string;
  height: string;
  weight: string;
  shoulder: string;
  chest: string;
  waist: string;
  sleeve: string;
  trouser: string;
};

const initial: Form = {
  product: "",
  fit: "",
  height: "",
  weight: "",
  shoulder: "",
  chest: "",
  waist: "",
  sleeve: "",
  trouser: "",
};

const products = ["Suit", "Shirt", "Jacket", "Trousers"];
const fits = [
  { id: "Slim", desc: "Closer to the body, contemporary line." },
  { id: "Regular", desc: "Balanced silhouette, our signature cut." },
  { id: "Comfort", desc: "Relaxed drape, generous in the chest." },
];

function recommend(f: Form) {
  const chest = parseInt(f.chest) || 0;
  const waist = parseInt(f.waist) || 0;
  const base = Math.max(chest, waist + 6);
  let size = 48;
  if (base >= 92 && base < 96) size = 46;
  else if (base >= 96 && base < 100) size = 48;
  else if (base >= 100 && base < 104) size = 50;
  else if (base >= 104 && base < 108) size = 52;
  else if (base >= 108 && base < 112) size = 54;
  else if (base >= 112) size = 56;
  else size = 44;

  const fitMap: Record<string, string> = {
    Slim: "Contemporary tailored silhouette",
    Regular: "Signature balanced silhouette",
    Comfort: "Relaxed elegant silhouette",
  };

  return {
    size: `${f.fit || "Regular"} ${size}`,
    silhouette: fitMap[f.fit] ?? "Signature balanced silhouette",
    advice: `Based on your measurements, we recommend a ${f.fit?.toLowerCase() || "regular"} ${f.product?.toLowerCase() || "piece"}. Visit our Casablanca boutique for final adjustment and styling assistance.`,
  };
}

function FitExperiencePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [done, setDone] = useState(false);

  const set = (k: keyof Form) => (v: string) => setForm((s) => ({ ...s, [k]: v }));

  const stepValid = () => {
    if (step === 0) return !!form.product;
    if (step === 1) {
      return form.height && form.weight && form.chest && form.waist && form.shoulder;
    }
    if (step === 2) return !!form.fit;
    return true;
  };

  const next = () => {
    if (!stepValid()) return;
    if (step === 2) {
      setDone(true);
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const reset = () => {
    setForm(initial);
    setStep(0);
    setDone(false);
  };

  const result = done ? recommend(form) : null;

  return (
    <>
      <section className="pt-40 pb-12 md:pt-52 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal><p className="eyebrow-gold">— Virtual Fitting Concierge</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              The <span className="italic">DAMAT</span> Fit Experience.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-graphite leading-relaxed">
              An elegant assistant to find your silhouette before you visit the boutique.
              Three steps, refined inputs, a curated recommendation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          {/* Progress */}
          <div className="mb-12 grid grid-cols-3 gap-px bg-border">
            {["Product", "Measurements", "Fit"].map((label, i) => {
              const active = step === i && !done;
              const completed = i < step || done;
              return (
                <div key={label} className="bg-ivory p-5">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-8 w-8 place-items-center border text-xs font-medium transition-all ${
                      completed ? "bg-gold border-gold text-ink" : active ? "border-ink text-ink" : "border-ink/20 text-ink/40"
                    }`}>
                      {completed ? <Check className="h-3.5 w-3.5" /> : `0${i + 1}`}
                    </span>
                    <span className={`eyebrow ${active || completed ? "text-ink" : "text-ink/40"}`}>{label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border p-8 md:p-14 min-h-[480px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!done && step === 0 && (
                <motion.div key="step-0" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                  <p className="eyebrow text-graphite flex items-center gap-2"><Shirt className="h-3.5 w-3.5" /> Step 01</p>
                  <h2 className="mt-4 display-md text-ink">What are we fitting today?</h2>
                  <div className="mt-10 grid sm:grid-cols-2 gap-4">
                    {products.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => set("product")(p)}
                        className={`group relative text-left p-7 border transition-all duration-300 ${
                          form.product === p ? "border-gold bg-gold/5" : "border-ink/15 hover:border-ink"
                        }`}
                      >
                        <p className="font-display text-3xl text-ink">{p}</p>
                        <p className="mt-2 text-sm text-graphite">Refined silhouette guidance</p>
                        {form.product === p && <Check className="absolute top-5 right-5 h-5 w-5 text-gold" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!done && step === 1 && (
                <motion.div key="step-1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                  <p className="eyebrow text-graphite flex items-center gap-2"><Ruler className="h-3.5 w-3.5" /> Step 02</p>
                  <h2 className="mt-4 display-md text-ink">Your measurements.</h2>
                  <p className="mt-3 text-sm text-graphite max-w-md">All values in centimetres. Approximate is welcome — final fitting is perfected in-store.</p>
                  <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                    <Input label="Height (cm)" value={form.height} onChange={set("height")} />
                    <Input label="Weight (kg)" value={form.weight} onChange={set("weight")} />
                    <Input label="Shoulder width (cm)" value={form.shoulder} onChange={set("shoulder")} />
                    <Input label="Chest (cm)" value={form.chest} onChange={set("chest")} />
                    <Input label="Waist (cm)" value={form.waist} onChange={set("waist")} />
                    <Input label="Sleeve length (cm)" value={form.sleeve} onChange={set("sleeve")} />
                    <Input label="Trouser length (cm)" value={form.trouser} onChange={set("trouser")} />
                  </div>
                </motion.div>
              )}

              {!done && step === 2 && (
                <motion.div key="step-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                  <p className="eyebrow text-graphite flex items-center gap-2"><User2 className="h-3.5 w-3.5" /> Step 03</p>
                  <h2 className="mt-4 display-md text-ink">Your preferred silhouette.</h2>
                  <div className="mt-10 grid md:grid-cols-3 gap-4">
                    {fits.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => set("fit")(f.id)}
                        className={`text-left p-7 border transition-all duration-300 h-full ${
                          form.fit === f.id ? "border-gold bg-gold/5" : "border-ink/15 hover:border-ink"
                        }`}
                      >
                        <p className="font-display text-2xl text-ink">{f.id}</p>
                        <p className="mt-3 text-sm text-graphite leading-relaxed">{f.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {done && result && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                  <div className="text-center">
                    <p className="eyebrow-gold flex items-center justify-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Your Recommendation</p>
                    <h2 className="mt-6 display-lg text-ink">
                      Recommended fit: <span className="italic text-gold">{result.size}</span>
                    </h2>
                    <p className="mt-4 text-graphite">{result.silhouette}</p>
                  </div>

                  <div className="mt-12 grid md:grid-cols-3 gap-px bg-border">
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">Product</p>
                      <p className="mt-3 font-display text-2xl text-ink">{form.product}</p>
                    </div>
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">Fit</p>
                      <p className="mt-3 font-display text-2xl text-ink">{form.fit}</p>
                    </div>
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">Size</p>
                      <p className="mt-3 font-display text-2xl text-gold">{result.size.split(" ")[1]}</p>
                    </div>
                  </div>

                  <div className="mt-10 bg-ink text-ivory p-8 md:p-10">
                    <p className="eyebrow-gold">Stylist's Note</p>
                    <p className="mt-4 text-ivory/85 leading-relaxed">{result.advice}</p>
                    <p className="mt-6 text-xs italic text-ivory/55">"Final fitting is perfected in-store by our team."</p>
                  </div>

                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/212522262991?text=${encodeURIComponent(
                        `Hello DAMAT TWEEN, I'd like to book a fitting. My recommended size is ${result.size} for a ${form.product}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxe"
                    >
                      <span>Book a Fitting on WhatsApp</span>
                    </a>
                    <button onClick={reset} className="btn-outline-luxe">
                      <span>Start Over</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!done && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-2 eyebrow text-graphite disabled:opacity-30"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back
              </button>
              <button
                onClick={next}
                disabled={!stepValid()}
                className="btn-luxe disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>{step === 2 ? "Reveal Recommendation" : "Continue"}</span>
                <ArrowRight className="h-3.5 w-3.5 relative z-10" />
              </button>
            </div>
          )}

          <p className="mt-12 text-center text-xs italic text-graphite max-w-lg mx-auto">
            "Final fitting is perfected in-store by our team." — DAMAT TWEEN Maroc
          </p>
        </div>
      </section>
    </>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="eyebrow text-graphite block mb-3">{label}</label>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink text-lg font-display focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
