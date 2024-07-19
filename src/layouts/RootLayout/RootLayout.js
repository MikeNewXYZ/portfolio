import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

const rootAnimation = {
	hide: { opacity: 0 },
	show: { opacity: 1 },
};

export default function RootLayout({ children }) {
	return (
		<motion.div
			className={twMerge(
				"relative min-h-dvh min-w-full overflow-x-hidden font-space-grotesk",
				spaceGrotesk.variable,
			)}
			variants={rootAnimation}
			initial="hide"
			animate="show"
			exit="hide"
		>
			{children}
		</motion.div>
	);
}
