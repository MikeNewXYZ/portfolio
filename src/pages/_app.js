import "@/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }) {
	return (
		<div
			className={twMerge(
				"min-h-dvh min-w-full overflow-x-hidden font-space-grotesk",
				spaceGrotesk.variable,
			)}
		>
			<Component {...pageProps} />
		</div>
	);
}
