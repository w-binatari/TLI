# TLI CAPSS — website

Static single-page site: `index.html`, `css/site.css`, and `images/`.

No build step. Open `index.html` locally, or deploy the folder as a static site.

## Deploy

### Netlify

1. Drag the project folder onto [Netlify Drop](https://app.netlify.com/drop), **or** connect the Git repo and set:
   - **Publish directory:** `/` (repo root)
   - **Build command:** leave empty
2. `netlify.toml` already sets the publish directory.

### Vercel

1. Import the repo in Vercel (or `vercel` from the project root).
2. Framework: **Other** / static. No build command. Output: project root.
3. `vercel.json` is included for clean routing.

### Any static host

Upload the whole folder (`index.html`, `css/`, `images/`) so those paths stay relative. Examples: GitHub Pages, Cloudflare Pages, shared hosting.

## Brand assets

Organised under `images/brand/`:

| File | Use |
|------|-----|
| `logo-horizontal.png` | Header (light background) |
| `logo-horizontal-on-dark.png` | Footer |
| `logo-mark.png` / `logo-mark-on-dark.png` | Stacked mark + name |
| `logo-icon.png` / `logo-icon-on-dark.png` | Icon only |
| `favicon.png` | Browser favicon |
| `ceo.jpg` | About — Mr. Emmanuel Oturu |
| `source/` | Untouched originals as supplied |

Hero fleet photo: `images/hero-fleet.jpg`.

## Before go-live

- Replace `YOUR-DOMAIN.example` in Open Graph / Twitter meta (`index.html`) with the live URL.
- Confirm phone / WhatsApp numbers and hours with the client if anything changes.
