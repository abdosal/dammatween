import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, { en: string; fr: string }>;

export const dict = {
  // Nav
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "Maison" },
  "nav.collections": { en: "Collections", fr: "Collections" },
  "nav.fit": { en: "Fit Experience", fr: "Expérience Sur-Mesure" },
  "nav.lookbook": { en: "Lookbook", fr: "Lookbook" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.book": { en: "Book Fitting", fr: "Prendre Rendez-Vous" },

  // Common buttons / CTAs
  "cta.explore": { en: "Explore Collection", fr: "Découvrir la Collection" },
  "cta.contact": { en: "Contact Us", fr: "Nous Contacter" },
  "cta.discover": { en: "Discover", fr: "Découvrir" },
  "cta.whatsapp": { en: "WhatsApp Concierge", fr: "Concierge WhatsApp" },
  "cta.findBoutique": { en: "Find the Boutique", fr: "Trouver la Boutique" },
  "cta.beginFit": { en: "Begin Fitting", fr: "Commencer l'Essayage" },
  "cta.viewAll": { en: "View all categories →", fr: "Voir toutes les catégories →" },
  "cta.openGallery": { en: "Open the gallery →", fr: "Ouvrir la galerie →" },

  // Footer
  "footer.tagline": {
    en: "Premium men's fashion franchise bringing refined tailoring and Italian-inspired fabrics to Casablanca since 2012.",
    fr: "Franchise de mode masculine premium, apportant un tailoring raffiné et des tissus d'inspiration italienne à Casablanca depuis 2012.",
  },
  "footer.maison": { en: "Maison", fr: "Maison" },
  "footer.boutique": { en: "Boutique Casablanca", fr: "Boutique Casablanca" },
  "footer.hoursWeek": { en: "Mon – Sat · 10:00 – 20:00", fr: "Lun – Sam · 10h00 – 20h00" },
  "footer.hoursSun": { en: "Sun · By appointment", fr: "Dim · Sur rendez-vous" },
  "footer.rights": {
    en: "All rights reserved",
    fr: "Tous droits réservés",
  },
  "footer.tag2": { en: "Refined menswear · Casablanca", fr: "Vestiaire raffiné · Casablanca" },

  // Fit Experience
  "fit.eyebrow": { en: "— Virtual Fitting Concierge", fr: "— Concierge d'Essayage Virtuel" },
  "fit.title1": { en: "The", fr: "L'Expérience" },
  "fit.title2": { en: "Fit Experience.", fr: "Sur-Mesure." },
  "fit.intro": {
    en: "An elegant assistant to find your silhouette before you visit the boutique. Three steps, refined inputs, a curated recommendation.",
    fr: "Un assistant élégant pour trouver votre silhouette avant de visiter la boutique. Trois étapes, des saisies raffinées, une recommandation sur-mesure.",
  },
  "fit.step.product": { en: "Product", fr: "Pièce" },
  "fit.step.measure": { en: "Measurements", fr: "Mensurations" },
  "fit.step.fit": { en: "Fit", fr: "Coupe" },
  "fit.step1.title": { en: "What are we fitting today?", fr: "Quelle pièce souhaitez-vous ?" },
  "fit.step1.sub": { en: "Refined silhouette guidance", fr: "Conseil de silhouette raffiné" },
  "fit.step2.title": { en: "Your measurements.", fr: "Vos mensurations." },
  "fit.step2.sub": {
    en: "All values in centimetres. Approximate is welcome — final fitting is perfected in-store.",
    fr: "Valeurs en centimètres. Une estimation suffit — l'essayage final est perfectionné en boutique.",
  },
  "fit.step2.guide": { en: "How to measure ↓", fr: "Guide des mensurations ↓" },
  "fit.step3.title": { en: "Your preferred silhouette.", fr: "Votre silhouette préférée." },
  "fit.continue": { en: "Continue", fr: "Continuer" },
  "fit.back": { en: "Back", fr: "Retour" },
  "fit.reveal": { en: "Reveal Recommendation", fr: "Révéler ma Recommandation" },
  "fit.result.eyebrow": { en: "Your Recommendation", fr: "Votre Recommandation" },
  "fit.result.size": { en: "Recommended fit:", fr: "Coupe recommandée :" },
  "fit.result.product": { en: "Product", fr: "Pièce" },
  "fit.result.fit": { en: "Fit", fr: "Coupe" },
  "fit.result.sizeLabel": { en: "Size", fr: "Taille" },
  "fit.result.note": { en: "Stylist's Note", fr: "Note du Styliste" },
  "fit.result.disclaimer": {
    en: '"Final fitting is perfected in-store by our team."',
    fr: '« L\'essayage final est perfectionné en boutique par notre équipe. »',
  },
  "fit.result.book": { en: "Book a Fitting on WhatsApp", fr: "Réserver un Essayage sur WhatsApp" },
  "fit.result.restart": { en: "Start Over", fr: "Recommencer" },

  // Products
  "product.suit": { en: "Suit", fr: "Costume" },
  "product.shirt": { en: "Shirt", fr: "Chemise" },
  "product.jacket": { en: "Jacket", fr: "Veste" },
  "product.trousers": { en: "Trousers", fr: "Pantalon" },

  // Fits
  "fit.slim": { en: "Slim", fr: "Cintrée" },
  "fit.regular": { en: "Regular", fr: "Classique" },
  "fit.comfort": { en: "Comfort", fr: "Confort" },
  "fit.slim.desc": { en: "Closer to the body, contemporary line.", fr: "Près du corps, ligne contemporaine." },
  "fit.regular.desc": { en: "Balanced silhouette, our signature cut.", fr: "Silhouette équilibrée, notre coupe signature." },
  "fit.comfort.desc": { en: "Relaxed drape, generous in the chest.", fr: "Tombé relâché, généreux à la poitrine." },

  // Measurements
  "m.height": { en: "Height (cm)", fr: "Taille (cm)" },
  "m.weight": { en: "Weight (kg)", fr: "Poids (kg)" },
  "m.shoulder": { en: "Shoulder width (cm)", fr: "Largeur d'épaules (cm)" },
  "m.chest": { en: "Chest (cm)", fr: "Tour de poitrine (cm)" },
  "m.waist": { en: "Waist (cm)", fr: "Tour de taille (cm)" },
  "m.hip": { en: "Hip (cm)", fr: "Tour de hanches (cm)" },
  "m.neck": { en: "Neck (cm)", fr: "Tour de cou (cm)" },
  "m.sleeve": { en: "Sleeve length (cm)", fr: "Longueur de manche (cm)" },
  "m.trouser": { en: "Trouser inseam (cm)", fr: "Entrejambe pantalon (cm)" },
  "m.shoe": { en: "Shoe size (EU)", fr: "Pointure (EU)" },

  // Guide
  "guide.title": { en: "Measurement Guide", fr: "Guide des Mensurations" },
  "guide.intro": {
    en: "Use a soft tape measure over light clothing. Stand naturally, relaxed shoulders. Don't pull the tape tight — it should rest comfortably.",
    fr: "Utilisez un mètre ruban souple par-dessus des vêtements légers. Tenez-vous naturellement, épaules détendues. Ne serrez pas le mètre — il doit reposer confortablement.",
  },
  "guide.shoulder.t": { en: "Shoulder width", fr: "Largeur d'épaules" },
  "guide.shoulder.d": {
    en: "Measure straight across the back, from the tip of one shoulder bone to the other.",
    fr: "Mesurez droit dans le dos, d'une pointe d'épaule à l'autre.",
  },
  "guide.chest.t": { en: "Chest", fr: "Tour de poitrine" },
  "guide.chest.d": {
    en: "Wrap the tape around the fullest part of your chest, under the armpits, keeping it level.",
    fr: "Enroulez le mètre autour de la partie la plus large de la poitrine, sous les aisselles, à l'horizontale.",
  },
  "guide.waist.t": { en: "Waist", fr: "Tour de taille" },
  "guide.waist.d": {
    en: "Measure around your natural waistline — just above the belly button — with the tape level.",
    fr: "Mesurez autour de la taille naturelle — juste au-dessus du nombril — à l'horizontale.",
  },
  "guide.hip.t": { en: "Hip", fr: "Tour de hanches" },
  "guide.hip.d": {
    en: "Around the fullest part of your hips, feet together, tape parallel to the floor.",
    fr: "Autour de la partie la plus large des hanches, pieds joints, mètre parallèle au sol.",
  },
  "guide.neck.t": { en: "Neck", fr: "Tour de cou" },
  "guide.neck.d": {
    en: "Around the base of the neck where a shirt collar would sit, with one finger of ease.",
    fr: "À la base du cou, là où repose un col de chemise, avec un doigt d'aisance.",
  },
  "guide.sleeve.t": { en: "Sleeve", fr: "Manche" },
  "guide.sleeve.d": {
    en: "From the shoulder seam, down a slightly bent arm, to the wrist bone.",
    fr: "De la couture d'épaule, le long du bras légèrement plié, jusqu'à l'os du poignet.",
  },
  "guide.inseam.t": { en: "Inseam", fr: "Entrejambe" },
  "guide.inseam.d": {
    en: "From the crotch seam down the inside of the leg to the desired trouser break.",
    fr: "De la couture d'entrejambe le long de la jambe jusqu'à la cassure souhaitée du pantalon.",
  },

  // Contact
  "contact.eyebrow": { en: "— Send us a message", fr: "— Envoyez-nous un message" },
  "contact.name": { en: "Full name", fr: "Nom complet" },
  "contact.phone": { en: "Phone number", fr: "Téléphone" },
  "contact.email": { en: "Email", fr: "E-mail" },
  "contact.service": { en: "Service needed", fr: "Service souhaité" },
  "contact.serviceSelect": { en: "Select a service", fr: "Sélectionner un service" },
  "contact.message": { en: "Message", fr: "Message" },
  "contact.placeholder": {
    en: "Tell us about your visit, occasion or styling needs…",
    fr: "Parlez-nous de votre visite, occasion ou besoin de style…",
  },
  "contact.send": { en: "Send message", fr: "Envoyer le message" },
  "contact.sending": { en: "Sending…", fr: "Envoi…" },
  "contact.success": {
    en: "Thank you — a Style Advisor will contact you shortly.",
    fr: "Merci — un Conseiller de Style vous contactera prochainement.",
  },
  "contact.advisor": { en: "Speak with a Style Advisor.", fr: "Échangez avec un Conseiller de Style." },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k]?.en ?? k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("dt-lang") as Lang | null;
    if (stored === "en" || stored === "fr") setLangState(stored);
    else if (navigator.language?.toLowerCase().startsWith("fr")) setLangState("fr");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("dt-lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (k: DictKey) => dict[k]?.[lang] ?? dict[k]?.en ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
