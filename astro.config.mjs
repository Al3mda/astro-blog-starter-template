// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";

// i18n locales configuration
const defaultLocale = "en";
const locales = {
  en: "en-US",
  ar: "ar-SA",
};

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    i18n({
      locales,
      defaultLocale,
      exclude: ["pages/api/**/*", "pages/**/*.md", "pages/**/*.mdx"],
    }),
    sitemap({
      i18n: { locales, defaultLocale },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
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
