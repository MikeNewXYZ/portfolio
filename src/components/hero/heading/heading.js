"use client";
import { cn } from "@/lib/cn/cn";
import { motion } from "framer-motion";

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
				{mainText}
			</motion.h1>
		</div>
	);
}
