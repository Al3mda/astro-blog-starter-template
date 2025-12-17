// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    sitemap({
    }),
    robotsTxt({
      sitemaps: [
        "https://example.com/sitemap-index.xml",
      ],
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
