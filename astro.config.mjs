// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    i18n({
      locales: {
        "en-US": "en-US",
        "ar-SA": "ar-SA",
      },
      defaultLocale: "en-US",
    }),
    mdx(),
    sitemap({
      filter: filterSitemapByDefaultLocale({ defaultLocale: "en-US" }),
    }),
    robotsTxt({
      sitemaps: [
        "https://example.com/sitemap-index.xml",
      ],
    }),
  ],
  adapter: isDev ? undefined : cloudflare(),
});
