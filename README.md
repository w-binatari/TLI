# TLI Capps Logistics — website

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

## Before go-live

- Replace `YOUR-DOMAIN.example` in Open Graph / Twitter meta (`index.html`) with the live URL.
- Uncomment `og:image` / `twitter:image` once a share image exists (do not use the flyer JPG as a logo).
- Swap logo placeholders (`.logo-ph`) and the favicon for the final brand mark.
- Confirm WhatsApp / phone / hours with the client (current values are provisional).
- Fill About Us names, bios, and photos.
