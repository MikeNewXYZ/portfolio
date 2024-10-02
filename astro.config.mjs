// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://mikenew.xyz",
	integrations: [tailwind(), alpinejs({ entrypoint: "/src/alpinejs.entrypoint.ts" }), icon()],
});
