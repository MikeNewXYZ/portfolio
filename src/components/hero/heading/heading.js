"use client";
import { cn } from "@/lib/cn/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const topTextVariant = {
	hide: {
		opacity: 0,
		x: "-50%",
	},
	show: {
		opacity: 1,
		x: "0%",
		transition: {
			delay: 0.5,
			duration: 0.5,
			type: "spring",
		},
	},
};

const mainTextVariant = {
	hide: {
		opacity: 0,
		x: "50%",
	},
	show: {
		opacity: 1,
		x: "0%",
		transition: {
			delay: 0.5,
			duration: 0.5,
			type: "spring",
		},
	},
};

export default function Heading({
	className,
	topText = "",
	mainText = "",
	...props
}) {
	const [randomId, setRandomId] = useState(Math.random());
	const [newMainText, setNewMainText] = useState(mainText);

	// If key is set to "mainText" prop sometimes
	// the child of "AnimatePresence" will unmount
	// and disappear forever. Generating a
	// random number for the key somewhat
	// gets around this problem.
	useEffect(() => {
		setRandomId(Math.random());
		setNewMainText(mainText);
	}, [mainText]);

	return (
		<div {...props} className={cn("font-black uppercase", className)}>
			<motion.h1
				className="text-4xl"
				variants={topTextVariant}
				initial="hide"
				whileInView="show"
			>
				{topText}
			</motion.h1>

			<motion.h1
				className="text-8xl"
				variants={mainTextVariant}
				initial="hide"
				animate="show"
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={randomId}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						{newMainText}
					</motion.div>
				</AnimatePresence>
			</motion.h1>
		</div>
	);
}
