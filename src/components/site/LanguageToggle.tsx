import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageToggle({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { lang, setLang } = useI18n();
  const langs: Lang[] = ["en", "fr"];
  const base = variant === "light" ? "text-ink/70 hover:text-ink" : "text-ivory/60 hover:text-ivory";
  const active = variant === "light" ? "text-ink" : "text-gold";

  return (
    <div className="inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em]">
      {langs.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(l)}
            className={`transition-colors ${lang === l ? active : base}`}
            aria-pressed={lang === l}
          >
            {l.toUpperCase()}
          </button>
          {i === 0 && <span className="opacity-30">/</span>}
        </span>
      ))}
    </div>
  );
}
