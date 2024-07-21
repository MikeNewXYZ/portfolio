import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const wrapperAnimation = {
	hide: {
		opacity: 0,
		y: "-10%",
		display: "none",
		transition: {
			delay: 0.25,
			duration: 0.45,
		},
	},
	show: {
		opacity: 1,
		y: "0%",
	},
};

const titleAnimation = {
	hide: {
		opacity: 0,
		y: "10%",
	},
	show: {
		opacity: 1,
		y: "0%",
		transition: {
			duration: 0.75,
		},
	},
};

const subTitleAnimation = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const subTitleWordsAnimation = {
	hide: {
		opacity: 0,
		y: "10%",
	},
	show: {
		opacity: 1,
		y: "0%",
	},
};

export default function IntroHeading({
	title = "",
	subTitle = "",
	onAnimationComplete = () => {},
}) {
	const [wrapperAnimationState, setWrapperAnimationState] = useState("show");

	return (
		<AnimatePresence mode="wait" initial>
			<motion.div
				className="text-center uppercase opacity-0"
				variants={wrapperAnimation}
				animate={wrapperAnimationState}
				onAnimationComplete={(type) => type === "hide" && onAnimationComplete()}
			>
				<motion.h1
					className="text-7xl font-bold sm:text-9xl"
					variants={titleAnimation}
					initial="hide"
					animate="show"
				>
					{title}
				</motion.h1>
				<motion.h2
					className="text-sm sm:text-2xl"
					variants={subTitleAnimation}
					initial="hide"
					animate="show"
					onAnimationComplete={() => setWrapperAnimationState("hide")}
				>
					{subTitle.split(" ").map((word, index) => (
						<motion.div key={index} className="inline-block px-1" variants={subTitleWordsAnimation}>
							{word}
						</motion.div>
					))}
				</motion.h2>
			</motion.div>
		</AnimatePresence>
	);
}
