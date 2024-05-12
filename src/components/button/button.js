"use client";
import { cn } from "@/lib/cn/cn";
import { motion } from "framer-motion";

const buttonVariant = {
	inital: {
		y: "0%",
		scale: 1,
	},
	whileHover: {
		y: "-10%",
	},
	whileTap: {
		scale: 0.95,
	},
};

export default function Button({ children, className, ...props }) {
	return (
		<motion.button
			{...props}
			className={cn("border-2 px-2 py-1 uppercase leading-tight", className)}
			variants={buttonVariant}
			initial="inital"
			whileHover="whileHover"
			whileTap="whileTap"
		>
			{children}
		</motion.button>
	);
}