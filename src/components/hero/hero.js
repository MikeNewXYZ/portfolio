"use client";
import { motion } from "framer-motion";

const topTextVariants = {
	hidden: {
		opacity: 0,
		x: "-50%",
	},
	show: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

const mainTextVariants = {
	hidden: {
		opacity: 0,
		x: "50%",
	},
	show: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

const bottomTextContainerVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.05,
		},
	},
};

const bottomTextVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
	},
};

export default function Hero() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center pb-10 text-center">
			<div className="font-black uppercase">
				<motion.h1
					className="text-4xl"
					variants={topTextVariants}
					initial="hidden"
					animate="show"
				>
					hello there
				</motion.h1>
				<motion.h1
					className="text-8xl"
					variants={mainTextVariants}
					initial="hidden"
					animate="show"
				>
					i&apos;m mike
				</motion.h1>
			</div>
			<motion.p
				className="mt-4"
				variants={bottomTextContainerVariants}
				initial="hidden"
				animate="show"
			>
				{"British Web Developer & Designer".split("").map((l, i) => (
					<motion.span
						key={i}
						className={`inline-block ${l === " " ? "px-0.5" : ""}`}
						variants={bottomTextVariants}
					>
						{l}
					</motion.span>
				))}
			</motion.p>
		</main>
	);
}
