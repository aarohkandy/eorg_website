# eorg_website

Monorepo: **Vite + React** frontend (in `client/`), **Express** server (in `server/`). Uses **pnpm**.

Repo: [github.com/aarohkandy/eorg_website](https://github.com/aarohkandy/eorg_website)

---

## Prerequisites

- **Node.js** 18+ ([nodejs.org](https://nodejs.org))
- **pnpm** (install with: `npm install -g pnpm`)

---

## Run locally (development)

From the project root (this folder):

```bash
pnpm install
pnpm dev
```

- Dev server runs at **http://localhost:3000** (Vite may use another port if 3000 is busy; check the terminal).
- Frontend is in `client/`; Vite serves it with hot reload.

---

## Build for production

```bash
pnpm run build
```

- Builds the client into `dist/public/` and the server into `dist/`.
- To run the production app (serves built client + API):

  **Windows (PowerShell):**
  ```powershell
  $env:NODE_ENV="production"; node dist/index.js
  ```

  **macOS / Linux:**
  ```bash
  pnpm start
  ```
  (Or: `NODE_ENV=production node dist/index.js`)

---

## Project layout

| Path       | Purpose                    |
|-----------|----------------------------|
| `client/` | Vite + React app (UI)      |
| `server/` | Express server             |
| `shared/` | Shared code                |
| `patches/`| pnpm patches (e.g. wouter)|

---

## If you don’t have pnpm

Install it (after Node is installed):

```bash
npm install -g pnpm
```

Then run `pnpm install` and `pnpm dev` as above.
