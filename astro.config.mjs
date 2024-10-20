import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: "https://twcrypto.watch/",
  site: "https://twcrypto.vercel.app/",
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel({
    imageService: true
  })
});