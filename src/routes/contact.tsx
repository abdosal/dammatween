import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Phone, MessageCircle, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DAMAT TWEEN Maroc | Boutique Casablanca" },
      { name: "description", content: "Visit DAMAT TWEEN Maroc in Casablanca's Triangle d'Or. Phone, WhatsApp, hours and direct contact form." },
      { property: "og:title", content: "Contact DAMAT TWEEN Maroc" },
      { property: "og:description", content: "Speak with a Style Advisor in Casablanca." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(6, "Phone required").max(40),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const services = ["Suit fitting", "Product inquiry", "Styling advice", "Store visit", "Other"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you — a Style Advisor will contact you shortly.");
      form.reset();
      setSubmitting(false);
    }, 700);
  }

  return (
    <>
      <Toaster position="top-center" theme="dark" />
      <section className="pt-40 pb-16 md:pt-52 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal><p className="eyebrow text-graphite">— Contact</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 display-xl text-ink max-w-5xl">
              Speak with a <span className="italic">Style Advisor</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Info */}
          <Reveal className="md:col-span-5 space-y-10">
            <div>
              <p className="eyebrow-gold">Boutique</p>
              <h3 className="mt-4 font-display text-3xl text-ink">DAMAT TWEEN Maroc</h3>
              <p className="mt-2 text-graphite leading-relaxed flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1.5 text-gold shrink-0" />
                Triangle d'Or / Racine area<br />Casablanca, Morocco
              </p>
            </div>

            <div>
              <p className="eyebrow-gold">Direct</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="tel:+212522262991" className="flex items-center gap-3 text-ink link-underline">
                    <Phone className="h-4 w-4 text-gold" /> 05 22 26 29 91
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/212522262991" className="flex items-center gap-3 text-ink link-underline">
                    <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@damattween.ma" className="flex items-center gap-3 text-ink link-underline">
                    <Mail className="h-4 w-4 text-gold" /> contact@damattween.ma
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow-gold">Hours</p>
              <ul className="mt-4 space-y-2 text-graphite">
                <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Monday – Saturday · 10:00 – 20:00</li>
                <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold opacity-50" /> Sunday · By appointment</li>
              </ul>
            </div>

            <div>
              <p className="eyebrow-gold">Follow</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://instagram.com" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-ink/20 hover:bg-ink hover:text-ivory transition">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-ink/20 hover:bg-ink hover:text-ivory transition">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="md:col-span-7" delay={0.15}>
            <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-12 space-y-6">
              <p className="eyebrow text-graphite">— Send us a message</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Field name="name" label="Full name" />
                <Field name="phone" label="Phone number" type="tel" />
              </div>
              <Field name="email" label="Email" type="email" />
              <div>
                <label className="eyebrow text-graphite block mb-3">Service needed</label>
                <select name="service" defaultValue="" required className="w-full bg-transparent border-b border-ink/30 py-3 text-ink focus:outline-none focus:border-gold transition">
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="eyebrow text-graphite block mb-3">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  maxLength={1000}
                  className="w-full bg-transparent border-b border-ink/30 py-3 text-ink focus:outline-none focus:border-gold transition resize-none"
                  placeholder="Tell us about your visit, occasion or styling needs…"
                />
              </div>
              <button type="submit" disabled={submitting} className="btn-luxe disabled:opacity-50">
                <span>{submitting ? "Sending…" : "Send message"}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ink">
        <div className="relative h-[420px] md:h-[520px] w-full">
          <iframe
            title="DAMAT TWEEN Maroc Casablanca map"
            src="https://www.google.com/maps?q=Racine+Casablanca&output=embed"
            className="h-full w-full border-0 grayscale contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow text-graphite block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required
        maxLength={255}
        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
