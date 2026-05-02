import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, type DictKey } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

const NAV: { to: string; key: DictKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/collections", key: "nav.collections" },
  { to: "/fit-experience", key: "nav.fit" },
  { to: "/lookbook", key: "nav.lookbook" },
  { to: "/services", key: "nav.services" },
  { to: "/contact", key: "nav.contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const { t } = useI18n();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ink/95 text-ivory backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-[0.2em]">
          <span className="font-medium">DAMAT</span>
          <span className="h-4 w-px bg-current opacity-50" />
          <span className="font-light">TWEEN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] font-medium uppercase tracking-[0.22em] link-underline opacity-90 hover:opacity-100"
              activeProps={{ className: "opacity-100 text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageToggle />
          <span className="h-4 w-px bg-current opacity-30" />
          <a
            href="https://wa.me/212522262991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold link-underline"
          >
            {t("nav.book")}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 -mr-2"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto bg-ink text-ivory transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex min-h-full flex-col px-8 py-12 gap-7">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-3xl font-light"
              style={{
                animation: open ? `reveal-up 0.6s ${0.05 * i + 0.1}s both` : undefined,
              }}
            >
              {t(item.key)}
            </Link>
          ))}
          <a href="https://wa.me/212522262991" className="mt-6 eyebrow-gold">
            WhatsApp · 05 22 26 29 91
          </a>
        </nav>
      </div>
    </header>
  );
}
