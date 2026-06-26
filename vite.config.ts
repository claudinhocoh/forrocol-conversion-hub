// Static-export configuration for cPanel/Apache hosting.
// `npm run build` outputs a fully static site under `.output/public`.
// Upload its contents to `public_html`. No Node server required.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Nitro "static" preset → prerendered HTML + assets in .output/public.
  // (Inside Lovable's hosted build this is forced to cloudflare; for your
  // own `npm run build` the static preset applies.)
  nitro: { preset: "static" },
  tanstackStart: {
    server: { entry: "server" },
    // SPA fallback: every non-prerendered URL receives the shell HTML and
    // hydrates client-side. Combined with the .htaccess rewrite below this
    // makes deep links work on Apache without a Node runtime.
    spa: { enabled: true },
    // Routes to prerender to real .html files at build time.
    pages: [
      { path: "/" },
      { path: "/privacidade" },
      { path: "/termos" },
    ],
  },
});
