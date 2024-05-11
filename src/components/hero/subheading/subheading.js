"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn/cn";

const containerVariant = {
	hide: {
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

const letterVariant = {
	hide: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
	},
};

export default function Subheading({ className, text = "", ...props }) {
	return (
		<motion.p
			{...props}
			className={cn("", className)}
			variants={containerVariant}
			initial="hide"
			animate="show"
		>
			{text.split("").map((l, i) => (
				<motion.span
					key={i}
					className={`inline-block ${l === " " ? "px-0.5" : ""}`}
					variants={letterVariant}
				>
					{l}
				</motion.span>
			))}
		</motion.p>
	);
}
