import { AnimatePresence, motion } from "framer-motion";

export default function Title({ homeTitle }) {
	// Prevents text from disapearing when homeTitle prop
	// changes too quickly.
	const titleKey = `${homeTitle}-${Math.random()}`;

	return (
		<h1 className="text-6xl font-black sm:text-8xl">
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={titleKey}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{homeTitle}
				</motion.div>
			</AnimatePresence>
		</h1>
	);
}
