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
		extend: {},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".button": {
					"@apply block select-none border-2 px-3 py-1.5 text-sm uppercase transition-all duration-500 ease-in-out hover:-translate-y-1 active:scale-95":
						{},
				},
			});
		},
	],
};
