import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: "https://twcrypto.watch/",
  site: "https://tw-crypto.vercel.app/",
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel(),
});