# Android APK

The Android app embeds the Next.js static export from `out/`. It does not load the hosted website at startup and does not require a development server. The public catalog is bundled at build time; calls, WhatsApp, maps, and external links use external services.

- Application ID: `com.mrfgalaxytiles.app`
- Application name: `MRF Galaxy Tiles`
- Minimum Android version: 7.0 (API 24); target SDK: 36
- Required build tools: Node.js 22+, JDK 21, Android SDK platform 36, and Android build tools 35.0.0

## Rebuild on Windows

Run `npm ci`, set `JAVA_HOME` to JDK 21 and `ANDROID_HOME` to your SDK directory, then run `npm run android:build`. The script cleans generated web output, supplies `NEXT_PUBLIC_SITE_URL=https://mrf-galaxy.vercel.app`, builds the static site, syncs Capacitor, runs `assembleDebug`, and copies the APK to `MRF-Galaxy-Tiles.apk` in the project root. SDK paths containing spaces are supported. This machine uses `C:/AndroidSDK` through the ignored `android/local.properties` file.

For a web-only build, copy `.env.production.example` to `.env.production` and run `npm run build`. Confirm `out/index.html` exists. Serve `out/` with a static web server; `next start` does not support static exports.

## Install and signing

Share `MRF-Galaxy-Tiles.apk`. Open it on a compatible Android device and allow installation from that file-sharing/browser app when Android prompts. This is an installable **debug-signed APK**, built using the existing local Android debug keystore, not a production-signed Play Store release. Keep the same signing identity for in-place updates. A production release needs the owner's release keystore and release signing configuration.

## Static-export compatibility

`next.config.ts` enables `output: 'export'`, unoptimized images, trailing slashes, and the static catalog. Dynamic catalog routes enumerate their exported paths. Robots and sitemap handlers are explicitly static.

The original server-based administration routes are preserved in `server-only/admin/`, and the authentication proxy in `server-only/proxy.ts`. They require a Next.js server, cookies, and Supabase and are not included in the public APK. Existing supporting admin components and libraries remain in source. To restore server hosting, move these files back to `app/admin/` and `proxy.ts`, remove static-export configuration, and configure Supabase. No hosted deployment was changed by this build.

`MainActivity.java` maps nested document requests to their exported `index.html`, retaining Capacitor's JavaScript bridge injection and returning the bundled 404 for unknown paths. Next.js asset and client navigation requests are passed through unchanged.

## Source recovery

Missing and empty files were restored from the configured repository, `https://github.com/shahriarshis691-art/mrf-tiles`, at commit `85472c234ed1d48a531fbffcd614a0b03ee49c46`. Existing nonempty working files were preserved. The missing Git object pack and index were restored from that same revision.
