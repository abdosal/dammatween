import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { I18nProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow-gold">Error 404</p>
        <h1 className="mt-6 display-lg">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-outline-luxe">
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DAMAT TWEEN Maroc | Premium Men's Fashion & Luxury Suits in Casablanca" },
      {
        name: "description",
        content:
          "Discover DAMAT TWEEN Maroc, a premium men's fashion franchise in Casablanca offering refined suits, Italian-inspired fabrics, styling advice, fittings, and contemporary menswear.",
      },
      { name: "author", content: "DAMAT TWEEN Maroc" },
      {
        name: "keywords",
        content:
          "men's fashion Casablanca, luxury suits Morocco, premium menswear Morocco, Italian fabric suits Casablanca, men's tailoring Casablanca, DAMAT TWEEN Maroc",
      },
      { property: "og:title", content: "DAMAT TWEEN Maroc | Premium Men's Fashion in Casablanca" },
      {
        property: "og:description",
        content:
          "Refined tailoring, Italian-inspired fabrics, contemporary menswear and luxury styling for the modern gentleman in Casablanca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <I18nProvider>
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </I18nProvider>
    </>
  );
}
