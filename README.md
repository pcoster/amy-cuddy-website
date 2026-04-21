# Amy Cuddy — Official Website

A production-quality Next.js 14 website for Amy Cuddy, social psychologist, TED speaker, and author of *Presence*.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display + Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Editing Content

All site content lives in `src/data/`. Edit these TypeScript files to update the site — no CMS required:

| File | What it controls |
|------|-----------------|
| `src/data/site.ts` | Name, bio, tagline, social links, contact info |
| `src/data/books.ts` | Book listings, descriptions, buy links |
| `src/data/speaking.ts` | Keynote topics and descriptions |
| `src/data/testimonials.ts` | Testimonial quotes |
| `src/data/events.ts` | Upcoming events |
| `src/data/media.ts` | Press, videos, podcast appearances |

## Adding Images

Place images in the `public/images/` directory and update the paths in `src/data/site.ts` or the relevant data file.

## Deploy to Vercel

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

## Project Structure

```
src/
  app/           # Next.js App Router pages
  components/    # Reusable React components
  data/          # All editable content (TypeScript)
public/
  images/        # Static image assets
```
