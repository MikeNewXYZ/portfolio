import "react-toastify/dist/ReactToastify.css";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ToastContainer, Slide } from "react-toastify";

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

			<ToastContainer
				toastClassName={() =>
					"relative flex justify-center p-1 text-center min-h-10 shadow-md my-2 uppercase text-pretty justify-between overflow-hidden cursor-pointer text-center border-2 border-primary bg-secondary"
				}
				position="bottom-center"
				transition={Slide}
				closeButton={false}
				autoClose={2000}
				limit={1}
				closeOnClick
				hideProgressBar
			/>
		</motion.div>
	);
}
