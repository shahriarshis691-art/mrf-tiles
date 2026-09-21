# Phone installation

The public website now provides an install card in Bengali. On browsers that emit `beforeinstallprompt`, its button opens the native install confirmation directly. Other browsers show menu instructions, including Safari's Share → Add to Home Screen flow. Browser confirmation is required; silent or universal one-tap installation is not available.

The card is hidden inside Capacitor and standalone mode, and after the browser reports installation. Closing it dismisses it for the current tab session. Visiting in a regular browser after installation can still show the card if that browser does not expose installation status.

## Publish

Run `npm run build` with the real `NEXT_PUBLIC_SITE_URL` configured, then host the contents of `out/` at the root of an HTTPS origin. Share that website URL with customers. These source changes do not deploy the website or rebuild the APK.

Serve `/manifest.webmanifest` as `application/manifest+json` and `/sw.js` as JavaScript. Do not rewrite these files to HTML. Set `Cache-Control: no-cache` for `/sw.js` on the hosting platform; Next.js response headers are not available in static export mode.

The service worker is registered only in production browser builds. It caches only `/offline.html`, not the catalog, API responses, or administration pages. Catalog browsing requires internet. Icons derive from the existing `app/icon.svg` brand mark.

## Device verification after deployment

- Android Chrome: visit the HTTPS site, tap the install button, accept the browser confirmation, and launch from the home screen. Browser eligibility and engagement rules can delay the install event; menu instructions are available meanwhile.
- iPhone Safari: tap the button, follow Share → Add to Home Screen → Add, and launch the icon.
- Confirm the installed app opens without the install card. Close the card in a browser and navigate to confirm it stays dismissed for that tab session.
- After one online visit and worker activation, disconnect and reload: the reconnect notice should appear. Reconnect and retry.
- Facebook/Messenger embedded browsers: open the URL in an external browser first.
