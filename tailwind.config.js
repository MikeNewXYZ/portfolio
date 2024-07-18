/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: "#E7E0CD",
			secondary: "#000000",
		},
		extend: {
			fontFamily: {
				"space-grotesk": ["var(--font-space-grotesk)"],
			},
		},
	},
	plugins: [],
};
