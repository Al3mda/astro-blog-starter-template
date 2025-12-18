// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://example.com/sitemap-index.xml",
      ],
    }),
  ],
  adapter: isDev ? undefined : cloudflare(),
});
