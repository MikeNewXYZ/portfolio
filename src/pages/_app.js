import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import RootLayout from "@/layouts/RootLayout/RootLayout";

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<RootLayout key={router.asPath}>
				<Component {...pageProps} />
			</RootLayout>
		</AnimatePresence>
	);
}
