# PrivateDriver.io

Marketing site for [PrivateDriver](https://privatedriver.io/), a private membership platform where owners of private limousines book vetted chauffeurs. Trips are pre-arranged only. PrivateDriver is not a public rideshare.

The site is a Next.js 14 app (Pages Router, React 18) deployed on Netlify.

## Requirements

Node.js 22. The version is pinned in `.nvmrc` and in `netlify.toml` (`NODE_VERSION`).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Tests

```bash
npm test
```

`npm test` builds the site, serves that production build, and runs Cypress headless against it. Cypress does not run during the Netlify build.

## Deploy

Netlify builds with `npm run build` and publishes the Next.js output, as set in `netlify.toml`. Pull requests get Netlify deploy previews. DNS, the custom domain, and other Netlify site settings are managed in Netlify, not in this repository.
