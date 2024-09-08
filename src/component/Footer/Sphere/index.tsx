import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

// ANCHOR GENERATE NODES - Creates a bunch of node elements positioned to create a sphere.
function generateNodes(nodeCount: number, radius: number, glowCycleDuration: number) {
	let nodes = [];

	for (let i = 1; i <= nodeCount; i++) {
		// NOTE Calculate spherical coordinates for node positioning.
		const theta = (i / nodeCount) * 100;
		const delta = (i / nodeCount - 0.5) * Math.PI;

		// NOTE X, Y, Z coordinates to map the node on the sphere's surface.
		const x = radius * Math.cos(delta) * Math.cos(theta) + radius;
		const y = radius * Math.cos(delta) * Math.sin(theta) + radius;
		const z = radius * Math.sin(delta);

		// NOTE Stagger glow animation based on node index
		const glowDelay = `${-(i / nodeCount) * glowCycleDuration}s`;

		nodes.push(
			<div
				key={i}
				className={`${styles["sphere-nodes"]} absolute before:block before:bg-primary`}
				style={
					{
						"--glow-delay": glowDelay,
						"--x": `${Math.round(x)}px`,
						"--y": `${Math.round(y)}px`,
						"--z": `${Math.round(z)}px`,
					} as any
				}
			></div>,
		);
	}

	return nodes;
}

function Sphere({
	nodeCount = 200,
	nodeSize = 5,
	radius = 1000,
	rotationDuration = 100,
	glowCycleDuration = 10,
	floatingDuration = 20,
}) {
	const nodes = generateNodes(nodeCount, radius, glowCycleDuration);

	return (
		<div className="absolute bottom-0 left-0 -z-10 h-[70rem] w-full overflow-hidden">
			<div
				className={twMerge("absolute bottom-0 left-1/2", styles["sphere-wrapper-outer"])}
				style={
					{
						"--radius": `${radius}px`,
						"--rotation-duration": `${rotationDuration}s`,
						"--node-size": `${nodeSize}px`,
						"--glow-cycle-duration": `${glowCycleDuration}s`,
						"--floating-duration": `${floatingDuration}s`,
					} as any
				}
			>
				<div
					className={twMerge("-translate-x-1/2 translate-y-[80%]", styles["sphere-wrapper-inner"])}
				>
					<div className={styles["sphere"]}>{nodes}</div>
				</div>
			</div>
		</div>
	);
}

export default Sphere;
