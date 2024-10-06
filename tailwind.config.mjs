/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: "#E7E0CD",
			secondary: "#000000",
		},
	},
	plugins: [require("tailwindcss-animated")],
};
