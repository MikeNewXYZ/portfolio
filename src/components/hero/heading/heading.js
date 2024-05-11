import { cn } from "@/lib/cn/cn";
import { motion } from "framer-motion";

const topTextVariant = {
	initial: {
		opacity: 0,
		x: "-50%",
	},
	animate: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

const mainTextVariant = {
	initial: {
		opacity: 0,
		x: "50%",
	},
	animate: {
		opacity: 1,
		x: "0%",
		transition: {
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
				initial="initial"
				animate="animate"
				whileInView="visible"
			>
				{topText}
			</motion.h1>
			<motion.h1
				className="text-8xl"
				variants={mainTextVariant}
				initial="initial"
				animate="animate"
				whileInView="visible"
			>
				{mainText}
			</motion.h1>
		</div>
	);
}
