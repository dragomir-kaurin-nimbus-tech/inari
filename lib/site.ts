export const siteConfig = {
  name: "Inari Design",
  shortName: "Inari",
  tagline: "Branding, web dizajn i vizuelni identitet",
  title: "Inari Design — Branding, web dizajn i vizuelni identitet",
  description:
    "Inari Design kreira branding, web dizajn i vizuelne identitete za moderne kompanije. Logotipi, digitalni vizuali, štampa i web sajtovi koji grade poverenje i rast brenda.",
  locale: "sr_RS",
  language: "sr",
  keywords: [
    "Inari Design",
    "branding Srbija",
    "web dizajn",
    "vizuelni identitet",
    "logo dizajn",
    "graphic design",
    "dizajn logotipa",
    "brending agencija",
    "web sajtovi",
    "social media dizajn",
  ],
  social: {
    instagram: "https://www.instagram.com/inari.design19/",
  },
  services: [
    {
      name: "Branding",
      description:
        "Logotipi, vizuelni identitet i kompletna strategija brenda.",
    },
    {
      name: "Web Design",
      description: "Moderni i responsivni web sajtovi koji prodaju.",
    },
    {
      name: "Social Media",
      description: "Kreativni vizuali za Instagram, Facebook i LinkedIn.",
    },
  ],
} as const;

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
