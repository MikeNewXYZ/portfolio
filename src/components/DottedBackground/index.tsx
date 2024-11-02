"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import styles from "./style.module.css";

export default function DottedBackground() {
	const [starRotation, setStarRotation] = useState(0);

	useEffect(() => {
		calculateStarRotation();
		window.addEventListener("resize", calculateStarRotation);
		return () => window.removeEventListener("resize", calculateStarRotation);
	}, []);

	function calculateStarRotation() {
		const DEFAULT_ANGLE = 45;
		const acute = (Math.atan(window.innerWidth / window.innerHeight) * 180) / Math.PI;
		setStarRotation(acute + 180 - DEFAULT_ANGLE);
	}

	return (
		<div className="fixed left-0 top-0 -z-10 h-dvh w-full" style={{ perspective: "1000px" }}>
			{/* ANCHOR Fade Out */}
			<div
				className={twMerge("absolute left-0 top-0 z-30 h-full w-full", styles["fade-out"])}
			></div>

			{/* ANCHOR Vignette */}
			<div
				className={twMerge("absolute left-0 top-0 z-20 h-full w-full", styles["vignette"])}
			></div>

			{/* ANCHOR Stars */}
			<div
				className={twMerge(
					"absolute left-0 top-0 z-10 h-full w-full text-xl",
					styles["star-wrapper"],
				)}
			>
				<Icon
					className="absolute -translate-x-16 translate-y-16"
					style={{ rotate: `${starRotation}deg` }}
					icon="ph:shooting-star-fill"
				/>
				<Icon
					className="-translate-y-20] absolute -translate-x-4"
					style={{ rotate: `${starRotation}deg` }}
					icon="ph:shooting-star-fill"
				/>
				<Icon
					className="translate-x-32] absolute"
					style={{ rotate: `${starRotation}deg` }}
					icon="ph:shooting-star-fill"
				/>
			</div>

			{/* ANCHOR Dotted Background */}
			<div className={`${styles.background} h-full w-full`}></div>
		</div>
	);
}
