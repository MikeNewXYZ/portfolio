import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
			{
				find: "@components",
				replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
			},
			{
				find: "@context",
				replacement: fileURLToPath(new URL("./src/context", import.meta.url)),
			},
			{
				find: "@pages",
				replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
			},
			{
				find: "@hooks",
				replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
			},
		],
	},
});
