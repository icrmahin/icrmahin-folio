# Contributing

This repository is the source for the personal portfolio of A. Mahin. Contributions should preserve its factual accuracy, accessibility and visual direction.

## Development

1. Use Node.js 22+ and pnpm 12.15.0.
2. Install dependencies with `pnpm install`.
3. Start the local development server with `pnpm dev`.

## Before opening a pull request

Run all checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Do not add project claims, client details, metrics, testimonials or availability statements unless the owner has verified them. Do not add private client information or live customer data to screenshots, sample content or case studies.

## Design and implementation

- Preserve the existing Next.js App Router architecture unless there is a clear reason to change it.
- Prefer semantic HTML and native browser behavior.
- Keep motion restrained and respect `prefers-reduced-motion`.
- Keep the native pointer, keyboard support and visible focus states.
- Optimize images and avoid adding dependencies for effects that can be implemented with CSS.
- Add attribution for any third-party visual or font asset in `ASSET-CREDITS.md`.

## Pull requests

Keep pull requests focused. Include the reason for the change, the routes affected, the checks run and screenshots for visual changes. Do not merge changes that fail the production build or introduce unverified biographical or project claims.
