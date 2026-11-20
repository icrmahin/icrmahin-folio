# icrmahin-folio

The personal portfolio of A. Mahin — an independent product engineer and builder working across product thinking, interface design and software implementation.

The site is designed to serve two audiences without splitting into separate experiences: teams evaluating engineering capability, and founders or clients looking for someone who can take a product from idea to working software.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4
- Geist fonts
- Phosphor Icons
- pnpm

## Run locally

Requirements: Node.js 22 or newer and pnpm 12.15.0.

```bash
git clone https://github.com/icrmahin/icrmahin-folio.git
cd icrmahin-folio
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

GitHub Actions runs these checks on pushes to `main` and pull requests targeting `main`.

## Environment

Copy `.env.example` to `.env.local` when running locally.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Exact canonical origin of the deployed website, without a trailing slash. Used for metadata, structured data and sitemap URLs. |

Do not set the production URL to a guessed Vercel domain. Use the actual production domain shown in the Vercel project settings.

## Project structure

```text
app/
  about/                  About page
  projects/               Individual case-study routes
  layout.tsx              Root layout, fonts and site metadata
  page.tsx                Homepage
  robots.ts               Crawler rules
  sitemap.ts              Canonical sitemap
  manifest.ts             Web app manifest
components/
  nav/                    Site navigation
  projects/               Project cards, artwork and case studies
  theme/                  Dark/light theme
lib/
  projects.ts             Case-study content and project index
sections/                 Homepage sections
public/
  pfp.png                 Owner portrait
  resume.pdf              Resume download
  resume.html             Browser/print resume
```

## Selected work

- **Hibbullah** — Android-first pharmacy storefront and operations product built with Expo/React Native, Supabase/PostgreSQL and Cloudinary.
- **WOLFVANE for Zed** — a restrained dark editor theme with a deliberate syntax hierarchy.
- **Hibbullah Landing** — a responsive static product site built with semantic HTML, vanilla CSS and vanilla JavaScript.

The portfolio's project artwork is illustrative, not a captured production UI. No customer information or live business data is included in the artwork.

## Content and assets

Case-study copy is maintained in `lib/projects.ts`. The design uses original HTML/CSS compositions and the existing portrait and resume files. See [ASSET-CREDITS.md](./ASSET-CREDITS.md) for attribution and asset boundaries.

## Deployment

Deploy the repository through Vercel using the standard Next.js preset. Configure `NEXT_PUBLIC_SITE_URL` with the exact production origin in the Vercel environment settings, then redeploy. Confirm the production domain, sitemap, robots file and social preview after deployment.

## License

The source code is licensed under the MIT License. The owner's portrait, resume and other personal materials are excluded from that grant. Third-party packages and assets remain under their respective upstream licenses. See [LICENSE](./LICENSE) and [ASSET-CREDITS.md](./ASSET-CREDITS.md).
