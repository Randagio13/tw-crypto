import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://twcrypto.watch/",
  integrations: [tailwind(), icon()],
  output: "static",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    }
  }),
});