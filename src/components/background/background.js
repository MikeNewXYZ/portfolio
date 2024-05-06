"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import themeColors from "@/lib/theme-colors/theme-colors";

export default function Background() {
	const [scope, animate] = useAnimate();

	// Init animation
	useEffect(() => {
		const initAnimation = async () => {
			// fade-in animation
			await animate(
				scope.current,
				{
					opacity: 0.8,
					backgroundSize: "40px 40px",
				},
				{ duration: 5, ease: "circOut" },
			);

			// heartbeat animation
			await animate(
				scope.current,
				{
					opacity: [0.8, 0.5],
					backgroundSize: ["40px 40px", "50px 50px"],
					rotateX: [0, 15, -15],
					rotateY: [0, 15, -15],
				},
				{
					duration: 50,
					ease: "easeInOut",
					delay: 5,
					repeat: Infinity,
					repeatType: "mirror",
				},
			);
		};
		initAnimation();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="fixed left-0 top-0 -z-50 h-screen w-full overflow-hidden bg-base-100">
			<motion.div
				ref={scope}
				className="h-full w-full bg-center"
				initial={{
					opacity: 0,
					backgroundSize: "100px 100px",
					backgroundImage: `radial-gradient(circle, ${themeColors["base-content"]} 1px, transparent 1px)`,
					scale: 1.5,
					perspective: 2000,
				}}
			></motion.div>
		</div>
	);
}
