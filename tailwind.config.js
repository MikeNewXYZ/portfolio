/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: "#E7E0CD",
			secondary: "#000000",
		},
		extend: {
			fontFamily: {
				"space-grotesk": ["space-grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
