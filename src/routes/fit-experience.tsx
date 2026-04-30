import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { MeasurementGuide } from "@/components/site/MeasurementGuide";
import { ArrowLeft, ArrowRight, Check, Ruler, Shirt, User2, Sparkles } from "lucide-react";
import { useI18n, type DictKey } from "@/lib/i18n";

export const Route = createFileRoute("/fit-experience")({
  head: () => ({
    meta: [
      { title: "Fit Experience — DAMAT TWEEN Maroc | Virtual Fitting Concierge" },
      {
        name: "description",
        content:
          "The DAMAT Fit Experience — a virtual fitting concierge with measurement guide that recommends your perfect suit, shirt, jacket or trousers size before visiting our Casablanca boutique.",
      },
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
  hip: string;
  neck: string;
  sleeve: string;
  trouser: string;
  shoe: string;
};

const initial: Form = {
  product: "",
  fit: "",
  height: "",
  weight: "",
  shoulder: "",
  chest: "",
  waist: "",
  hip: "",
  neck: "",
  sleeve: "",
  trouser: "",
  shoe: "",
};

const products: { id: string; key: DictKey }[] = [
  { id: "Suit", key: "product.suit" },
  { id: "Shirt", key: "product.shirt" },
  { id: "Jacket", key: "product.jacket" },
  { id: "Trousers", key: "product.trousers" },
];

const fits: { id: string; key: DictKey; desc: DictKey }[] = [
  { id: "Slim", key: "fit.slim", desc: "fit.slim.desc" },
  { id: "Regular", key: "fit.regular", desc: "fit.regular.desc" },
  { id: "Comfort", key: "fit.comfort", desc: "fit.comfort.desc" },
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

  const fitLabel = f.fit || "Regular";
  return {
    size: `${fitLabel} ${size}`,
    sizeNumber: String(size),
  };
}

function FitExperiencePage() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [done, setDone] = useState(false);

  const set = (k: keyof Form) => (v: string) => setForm((s) => ({ ...s, [k]: v }));

  const stepValid = () => {
    if (step === 0) return !!form.product;
    if (step === 1) {
      // require core measurements
      return !!(form.height && form.weight && form.chest && form.waist && form.shoulder);
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
          <Reveal><p className="eyebrow-gold">{t("fit.eyebrow")}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              {t("fit.title1")} <span className="italic">DAMAT</span><br />{t("fit.title2")}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-graphite leading-relaxed">{t("fit.intro")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          {/* Progress */}
          <div className="mb-12 grid grid-cols-3 gap-px bg-border">
            {[
              { i: 0, label: t("fit.step.product") },
              { i: 1, label: t("fit.step.measure") },
              { i: 2, label: t("fit.step.fit") },
            ].map(({ i, label }) => {
              const active = step === i && !done;
              const completed = i < step || done;
              return (
                <div key={i} className="bg-ivory p-5">
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
                  <h2 className="mt-4 display-md text-ink">{t("fit.step1.title")}</h2>
                  <div className="mt-10 grid sm:grid-cols-2 gap-4">
                    {products.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => set("product")(p.id)}
                        className={`group relative text-left p-7 border transition-all duration-300 ${
                          form.product === p.id ? "border-gold bg-gold/5" : "border-ink/15 hover:border-ink"
                        }`}
                      >
                        <p className="font-display text-3xl text-ink">{t(p.key)}</p>
                        <p className="mt-2 text-sm text-graphite">{t("fit.step1.sub")}</p>
                        {form.product === p.id && <Check className="absolute top-5 right-5 h-5 w-5 text-gold" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!done && step === 1 && (
                <motion.div key="step-1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                  <p className="eyebrow text-graphite flex items-center gap-2"><Ruler className="h-3.5 w-3.5" /> Step 02</p>
                  <h2 className="mt-4 display-md text-ink">{t("fit.step2.title")}</h2>
                  <p className="mt-3 text-sm text-graphite max-w-md">{t("fit.step2.sub")}</p>
                  <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    <Input label={t("m.height")} value={form.height} onChange={set("height")} />
                    <Input label={t("m.weight")} value={form.weight} onChange={set("weight")} />
                    <Input label={t("m.shoulder")} value={form.shoulder} onChange={set("shoulder")} />
                    <Input label={t("m.chest")} value={form.chest} onChange={set("chest")} />
                    <Input label={t("m.waist")} value={form.waist} onChange={set("waist")} />
                    <Input label={t("m.hip")} value={form.hip} onChange={set("hip")} />
                    <Input label={t("m.neck")} value={form.neck} onChange={set("neck")} />
                    <Input label={t("m.sleeve")} value={form.sleeve} onChange={set("sleeve")} />
                    <Input label={t("m.trouser")} value={form.trouser} onChange={set("trouser")} />
                    <Input label={t("m.shoe")} value={form.shoe} onChange={set("shoe")} />
                  </div>

                  <div className="mt-12">
                    <MeasurementGuide />
                  </div>
                </motion.div>
              )}

              {!done && step === 2 && (
                <motion.div key="step-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                  <p className="eyebrow text-graphite flex items-center gap-2"><User2 className="h-3.5 w-3.5" /> Step 03</p>
                  <h2 className="mt-4 display-md text-ink">{t("fit.step3.title")}</h2>
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
                        <p className="font-display text-2xl text-ink">{t(f.key)}</p>
                        <p className="mt-3 text-sm text-graphite leading-relaxed">{t(f.desc)}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {done && result && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                  <div className="text-center">
                    <p className="eyebrow-gold flex items-center justify-center gap-2"><Sparkles className="h-3.5 w-3.5" /> {t("fit.result.eyebrow")}</p>
                    <h2 className="mt-6 display-lg text-ink">
                      {t("fit.result.size")} <span className="italic text-gold">{result.size}</span>
                    </h2>
                  </div>

                  <div className="mt-12 grid md:grid-cols-3 gap-px bg-border">
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">{t("fit.result.product")}</p>
                      <p className="mt-3 font-display text-2xl text-ink">{form.product}</p>
                    </div>
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">{t("fit.result.fit")}</p>
                      <p className="mt-3 font-display text-2xl text-ink">{form.fit}</p>
                    </div>
                    <div className="bg-ivory p-8">
                      <p className="eyebrow text-graphite">{t("fit.result.sizeLabel")}</p>
                      <p className="mt-3 font-display text-2xl text-gold">{result.sizeNumber}</p>
                    </div>
                  </div>

                  <div className="mt-10 bg-ink text-ivory p-8 md:p-10">
                    <p className="eyebrow-gold">{t("fit.result.note")}</p>
                    <p className="mt-4 text-ivory/85 leading-relaxed">
                      {form.product} · {form.fit} · {result.sizeNumber}
                    </p>
                    <p className="mt-6 text-xs italic text-ivory/55">{t("fit.result.disclaimer")}</p>
                  </div>

                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/212522262991?text=${encodeURIComponent(
                        `Bonjour DAMAT TWEEN, je souhaite réserver un essayage. Taille recommandée : ${result.size} pour un(e) ${form.product}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxe"
                    >
                      <span>{t("fit.result.book")}</span>
                    </a>
                    <button onClick={reset} className="btn-outline-luxe">
                      <span>{t("fit.result.restart")}</span>
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
                <ArrowLeft className="h-3.5 w-3.5" /> {t("fit.back")}
              </button>
              <button
                onClick={next}
                disabled={!stepValid()}
                className="btn-luxe disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>{step === 2 ? t("fit.reveal") : t("fit.continue")}</span>
                <ArrowRight className="h-3.5 w-3.5 relative z-10" />
              </button>
            </div>
          )}

          <p className="mt-12 text-center text-xs italic text-graphite max-w-lg mx-auto">
            {t("fit.result.disclaimer")} — DAMAT TWEEN Maroc
          </p>
        </div>
      </section>

      {/* Stand-alone guide section for SEO + always visible */}
      <section className="bg-bone py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-graphite">— {t("guide.title")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 display-md text-ink max-w-2xl">
              {t("guide.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <MeasurementGuide />
            </div>
          </Reveal>
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
