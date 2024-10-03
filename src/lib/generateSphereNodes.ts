type Nodes = {
	glowDelay: string;
	x: string;
	y: string;
	z: string;
}[];

function generateSphereNodes(nodeCount: number, radius: number, glowCycleDuration: number) {
	let nodes: Nodes = [];
	for (let i = 1; i <= nodeCount; i++) {
		// NOTE Calculate spherical coordinates for node positioning.
		const theta = (i / nodeCount) * 100;
		const delta = (i / nodeCount - 0.5) * Math.PI;

		// NOTE X, Y, Z coordinates to map the node on the sphere's surface.
		const x = radius * Math.cos(delta) * Math.cos(theta) + radius;
		const y = radius * Math.cos(delta) * Math.sin(theta) + radius;
		const z = radius * Math.sin(delta);

		// NOTE Stagger glow animation based on node index
		const glowDelay = -(i / nodeCount) * glowCycleDuration;

		nodes.push({ glowDelay: `${glowDelay}s`, x: `${x}px`, y: `${y}px`, z: `${z}px` });
	}

	return nodes;
}

export default generateSphereNodes;
