import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n, type DictKey } from "@/lib/i18n";

type GuideItem = {
  key: string;
  title: DictKey;
  desc: DictKey;
  diagram: "shoulder" | "chest" | "waist" | "hip" | "neck" | "sleeve" | "inseam";
};

const items: GuideItem[] = [
  { key: "shoulder", title: "guide.shoulder.t", desc: "guide.shoulder.d", diagram: "shoulder" },
  { key: "chest", title: "guide.chest.t", desc: "guide.chest.d", diagram: "chest" },
  { key: "waist", title: "guide.waist.t", desc: "guide.waist.d", diagram: "waist" },
  { key: "hip", title: "guide.hip.t", desc: "guide.hip.d", diagram: "hip" },
  { key: "neck", title: "guide.neck.t", desc: "guide.neck.d", diagram: "neck" },
  { key: "sleeve", title: "guide.sleeve.t", desc: "guide.sleeve.d", diagram: "sleeve" },
  { key: "inseam", title: "guide.inseam.t", desc: "guide.inseam.d", diagram: "inseam" },
];

export function MeasurementGuide() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>("shoulder");

  return (
    <div className="bg-bone border border-border">
      <div className="p-8 md:p-10 border-b border-border">
        <p className="eyebrow-gold">— {t("guide.title")}</p>
        <p className="mt-4 text-sm text-graphite leading-relaxed max-w-xl">{t("guide.intro")}</p>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Diagram side */}
        <div className="bg-ivory border-b md:border-b-0 md:border-r border-border p-8 md:p-12 flex items-center justify-center min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={open ?? "none"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[260px]"
            >
              <BodyDiagram highlight={open as GuideItem["diagram"] | null} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Accordion side */}
        <ul className="divide-y divide-border">
          {items.map((it) => {
            const isOpen = open === it.key;
            return (
              <li key={it.key}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : it.key)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left hover:bg-ivory transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-ink">{t(it.title)}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-graphite transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-6 text-sm text-graphite leading-relaxed">
                        {t(it.desc)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function BodyDiagram({ highlight }: { highlight: GuideItem["diagram"] | null }) {
  const active = "stroke-[var(--gold)]";
  const dim = "stroke-[var(--ink)]/15";
  const lineBase = "transition-all duration-500";
  const labelCls = "fill-[var(--gold)] text-[9px] uppercase tracking-[0.18em]";

  const is = (k: GuideItem["diagram"]) => highlight === k;

  return (
    <svg viewBox="0 0 200 360" fill="none" className="w-full h-auto">
      {/* Body silhouette */}
      <g stroke="currentColor" strokeWidth="1" className="text-ink/40" fill="none">
        {/* head */}
        <circle cx="100" cy="34" r="18" />
        {/* neck */}
        <path d="M92 50 L92 62 L108 62 L108 50" />
        {/* shoulders + torso */}
        <path d="M55 70 Q70 64 92 62 L108 62 Q130 64 145 70 L150 130 Q140 150 138 200 L130 280 L115 280 L108 200 L100 200 L92 200 L85 280 L70 280 L62 200 Q60 150 50 130 Z" />
        {/* arms */}
        <path d="M55 70 Q42 110 38 160 L46 200" />
        <path d="M145 70 Q158 110 162 160 L154 200" />
        {/* legs split line */}
        <line x1="100" y1="200" x2="100" y2="280" />
        {/* legs continued */}
        <path d="M70 280 L66 350 L82 350 L88 280" />
        <path d="M130 280 L134 350 L118 350 L112 280" />
      </g>

      {/* Highlight overlays */}
      {/* shoulder */}
      <line x1="55" y1="70" x2="145" y2="70" strokeWidth="2.5" strokeDasharray="3 3"
        className={`${lineBase} ${is("shoulder") ? active : dim}`} />
      {is("shoulder") && <text x="100" y="62" textAnchor="middle" className={labelCls}>SHOULDER</text>}

      {/* chest */}
      <ellipse cx="100" cy="100" rx="50" ry="8" strokeWidth="2.5"
        className={`${lineBase} ${is("chest") ? active : dim}`} />
      {is("chest") && <text x="100" y="92" textAnchor="middle" className={labelCls}>CHEST</text>}

      {/* waist */}
      <ellipse cx="100" cy="155" rx="42" ry="7" strokeWidth="2.5"
        className={`${lineBase} ${is("waist") ? active : dim}`} />
      {is("waist") && <text x="100" y="148" textAnchor="middle" className={labelCls}>WAIST</text>}

      {/* hip */}
      <ellipse cx="100" cy="205" rx="46" ry="8" strokeWidth="2.5"
        className={`${lineBase} ${is("hip") ? active : dim}`} />
      {is("hip") && <text x="100" y="226" textAnchor="middle" className={labelCls}>HIP</text>}

      {/* neck */}
      <ellipse cx="100" cy="58" rx="11" ry="4" strokeWidth="2.5"
        className={`${lineBase} ${is("neck") ? active : dim}`} />
      {is("neck") && <text x="100" y="46" textAnchor="middle" className={labelCls}>NECK</text>}

      {/* sleeve (right arm path) */}
      <path d="M145 70 Q158 110 162 160 L154 200" strokeWidth="2.5"
        className={`${lineBase} ${is("sleeve") ? active : dim}`} />
      {is("sleeve") && <text x="180" y="135" textAnchor="middle" className={labelCls}>SLEEVE</text>}

      {/* inseam */}
      <line x1="100" y1="205" x2="82" y2="350" strokeWidth="2.5" strokeDasharray="3 3"
        className={`${lineBase} ${is("inseam") ? active : dim}`} />
      <line x1="100" y1="205" x2="118" y2="350" strokeWidth="2.5" strokeDasharray="3 3"
        className={`${lineBase} ${is("inseam") ? active : dim}`} />
      {is("inseam") && <text x="100" y="320" textAnchor="middle" className={labelCls}>INSEAM</text>}
    </svg>
  );
}
