import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

const sphereWrapperAnimation = {
	hide: {
		opacity: 0,
		x: "0%",
		y: "0%",
		scale: 0.75,
	},
	show: {
		opacity: 1,
		x: ["0%", "-10%", "0%", "10%", "0%"],
		y: ["0%", "-20%", "0%"],
		scale: [0.8, 1],
		transition: {
			x: {
				duration: 120,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "mirror",
			},
			y: {
				duration: 60,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "mirror",
			},
			scale: {
				duration: 20,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "mirror",
			},
		},
	},
};

function generateNodes(nodeCount, radius, glowCycleDuration) {
	let nodes = [];

	for (let i = 1; i <= nodeCount; i++) {
		const theta = (i / nodeCount) * 100;
		const delta = (i / nodeCount - 0.5) * Math.PI;

		const x = radius * Math.cos(delta) * Math.cos(theta) + radius;
		const y = radius * Math.cos(delta) * Math.sin(theta) + radius;
		const z = radius * Math.sin(delta);

		const glowDelay = `${-(i / nodeCount) * glowCycleDuration}s`;

		nodes.push(
			<div
				key={i}
				className={`${styles["sphere-nodes"]} absolute before:block before:bg-primary`}
				style={{
					"--glow-delay": glowDelay,
					"--x": `${Math.round(x)}px`,
					"--y": `${Math.round(y)}px`,
					"--z": `${Math.round(z)}px`,
				}}
			></div>,
		);
	}

	return nodes;
}

export default function ContactBackground({
	nodeCount = 200,
	nodeSize = 5,
	radius = 1000,
	rotationDuration = 100,
	glowCycleDuration = 10,
}) {
	const nodes = generateNodes(nodeCount, radius, glowCycleDuration);

	return (
		<div className="fixed left-0 top-0 -z-10 flex h-dvh w-full items-center justify-center">
			<div className={`${styles.vignette} absolute left-0 top-0 z-20 h-full w-full`}></div>

			<AnimatePresence mode="wait" initial>
				<motion.div
					className={`${styles["sphere-wrapper"]} absolute top-[80%] origin-top`}
					style={{
						"--radius": `${radius}px`,
						"--rotation-duration": `${rotationDuration}s`,
						"--node-size": `${nodeSize}px`,
						"--glow-cycle-duration": `${glowCycleDuration}s`,
					}}
					variants={sphereWrapperAnimation}
					initial="hide"
					animate="show"
					exit="hide"
				>
					<div className={`${styles["sphere"]} h-full w-full`}>{nodes}</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
