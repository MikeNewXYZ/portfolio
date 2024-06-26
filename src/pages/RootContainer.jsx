import { AnimatePresence, motion } from "framer-motion";
import { useOutlet, useLocation } from "react-router-dom";
import { useState } from "react";

function AnimatedOutlet() {
	const o = useOutlet();
	const [outlet] = useState(o);

	return <>{outlet}</>;
}

export default function RootContainer() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={location.key}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<AnimatedOutlet />
			</motion.div>
		</AnimatePresence>
	);
}
