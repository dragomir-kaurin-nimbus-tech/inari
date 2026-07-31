# Inari Design

Next.js portfolio sajt za Inari Design — branding, web dizajn i vizuelni identitet.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Resend (kontakt forma)

## Setup

Zahteva **Node.js 18+** (preporučeno 20/22).

```bash
cp .env.example .env.local
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Environment

U `.env.local`:

| Varijabla | Opis |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL sajta (kasnije tvoj domen) |
| `RESEND_API_KEY` | API ključ sa [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox gde stižu poruke (za sada test mail) |
| `CONTACT_FROM_EMAIL` | Pošiljalac — `onboarding@resend.dev` dok ne verifikuješ domen |

## SEO

- Metadata (title template, description, keywords, Open Graph, Twitter)
- Dinamički `/opengraph-image` i `/twitter-image`
- `robots.txt` + `sitemap.xml`
- JSON-LD `@graph` (Organization, WebSite, WebPage, ProfessionalService)
- Semantički HTML, skip link, `lang="sr"`
- Opcioni `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` za Search Console

Kad povežeš domen: promeni `NEXT_PUBLIC_SITE_URL` i DNS na Vercel-u.

## Deploy (Vercel)

1. Connect GitHub repo
2. Dodaj iste env vars u Vercel projektu
3. Deploy

## Scripts

```bash
npm run dev    # development
npm run build  # production build
npm start      # pokreni build lokalno
npm run lint   # ESLint
```
