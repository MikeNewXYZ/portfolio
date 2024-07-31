import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const titleAnimation = {
	hide: { opacity: 0 },
	show: { opacity: 1 },
};

export default function Title({ title }) {
	const [titleText, setTitleText] = useState(title);

	useEffect(() => {
		// Delay to prevent quick prop changes from causing unmount
		const timeoutId = setTimeout(() => {
			setTitleText(title);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [title]);

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.h1
				key={titleText}
				className="text-6xl font-black uppercase sm:text-8xl"
				variants={titleAnimation}
				initial="hide"
				animate="show"
				exit="hide"
				transition={{ duration: 0.5 }}
			>
				{titleText}
			</motion.h1>
		</AnimatePresence>
	);
}
