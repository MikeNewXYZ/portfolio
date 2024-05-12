import "@/styles/globals.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={router.pathname}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}
