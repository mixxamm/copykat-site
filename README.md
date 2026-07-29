# CopyKat website

Marketing site for [CopyKat](https://github.com/mixxamm/CopyKat), a native
keyboard-first clipboard manager for macOS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static export

```bash
npm run build
```

Next.js writes the static site to `out/`.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by
`.github/workflows/deploy-pages.yml`.

Production URL:
[mixxamm.github.io/copykat-site](https://mixxamm.github.io/copykat-site/)
