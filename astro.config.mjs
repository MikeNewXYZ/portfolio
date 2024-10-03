// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: "https://mikenew.xyz",
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	integrations: [tailwind(), alpinejs({ entrypoint: "/src/alpinejs.entrypoint.ts" }), icon()],
});
