"use client";
import Button from "@/components/button/button";
import Link from "next/link";
import { cn } from "@/lib/cn/cn";
import { motion } from "framer-motion";
import { useMainTextContext } from "@/context/main-text-context/main-text-context";

const containerVariant = {
	initial: {
		opacity: 0,
		y: "50%",
	},
	animate: {
		opacity: 1,
		y: "0%",
	},
};

export default function NavButtons({ classNames, buttons = [], ...props }) {
	const { originalMainText, setMainText } = useMainTextContext();

	return (
		<motion.div
			{...props}
			className={cn("flex gap-4", classNames)}
			variants={containerVariant}
			initial="initial"
			animate="animate"
			whileInView="visible"
		>
			{buttons.map(({ href, name }, index) => (
				<Link
					key={index}
					href={href}
					onMouseEnter={() => setMainText(name)}
					onMouseLeave={() => setMainText(originalMainText)}
				>
					<Button className="pb-1.5">{name}</Button>
				</Link>
			))}
		</motion.div>
	);
}
