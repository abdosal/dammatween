import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-display text-2xl tracking-[0.2em]">
              <span className="font-medium">DAMAT</span>
              <span className="h-4 w-px bg-current opacity-50" />
              <span className="font-light">TWEEN</span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Premium men's fashion franchise bringing refined tailoring and
              Italian-inspired fabrics to Casablanca since 2012.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow-gold">Maison</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/about" className="link-underline text-ivory/80 hover:text-ivory">About</Link></li>
              <li><Link to="/collections" className="link-underline text-ivory/80 hover:text-ivory">Collections</Link></li>
              <li><Link to="/lookbook" className="link-underline text-ivory/80 hover:text-ivory">Lookbook</Link></li>
              <li><Link to="/services" className="link-underline text-ivory/80 hover:text-ivory">Services</Link></li>
              <li><Link to="/fit-experience" className="link-underline text-ivory/80 hover:text-ivory">Fit Experience</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow-gold">Boutique Casablanca</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-ivory/80">
              Triangle d'Or / Racine<br />
              Casablanca, Morocco
            </address>
            <div className="mt-5 space-y-2 text-sm text-ivory/80">
              <p>Mon – Sat · 10:00 – 20:00</p>
              <p>Sun · By appointment</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+212522262991" className="inline-flex items-center gap-2 text-sm text-gold link-underline">
                <Phone className="h-3.5 w-3.5" /> 05 22 26 29 91
              </a>
              <a href="https://wa.me/212522262991" className="inline-flex items-center gap-2 text-sm text-gold link-underline">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/50">
            © {new Date().getFullYear()} DAMAT TWEEN Maroc · All rights reserved
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/50">
            Refined menswear · Casablanca
          </p>
        </div>
      </div>
    </footer>
  );
}
