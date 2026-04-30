import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collections", label: "Collections" },
  { to: "/fit-experience", label: "Fit Experience" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
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

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] font-medium uppercase tracking-[0.22em] link-underline opacity-90 hover:opacity-100"
              activeProps={{ className: "opacity-100 text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://wa.me/212522262991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold link-underline"
          >
            Book Fitting
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ink text-ivory transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-8 py-12 gap-7">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-3xl font-light"
              style={{
                animation: open ? `reveal-up 0.6s ${0.05 * i + 0.1}s both` : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212522262991"
            className="mt-6 eyebrow-gold"
          >
            WhatsApp · 05 22 26 29 91
          </a>
        </nav>
      </div>
    </header>
  );
}
