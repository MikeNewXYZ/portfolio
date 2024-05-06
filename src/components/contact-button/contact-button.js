"use client";
import { Chats } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const MotionChats = motion(Chats);

const containerVariants = {
	hidden: { opacity: 0, y: "100%", scale: 1 },
	show: {
		opacity: 1,
		y: "0%",
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.3,
		},
	},
	hover: {
		y: "-10%",
	},
};

const textContainerVariants = {
	show: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		x: "-100%",
		scale: 1,
	},
	show: {
		opacity: 1,
		x: "-0%",
		scale: 1,
	},
};

export default function ContactButton({ href, ...rest }) {
	return (
		<div className="pointer-events-none fixed left-0 top-0 z-50 flex h-full w-full items-end justify-end p-4">
			<MotionLink
				className="pointer-events-auto flex w-full items-center justify-center gap-2 border-2 p-1 sm:w-fit sm:p-2"
				href={href}
				variants={containerVariants}
				initial="hidden"
				animate="show"
				whileHover="hover"
				{...rest}
			>
				<MotionChats
					className="text-xl sm:text-3xl"
					weight="regular"
					variants={itemVariants}
				/>

				<motion.p
					className="mb-0.5 text-lg uppercase sm:text-2xl"
					variants={textContainerVariants}
				>
					{"contact".split("").map((l, i) => (
						<motion.span
							key={i}
							className="inline-block"
							variants={itemVariants}
						>
							{l}
						</motion.span>
					))}
				</motion.p>
			</MotionLink>
		</div>
	);
}
