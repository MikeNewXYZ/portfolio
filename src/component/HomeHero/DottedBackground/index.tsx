import { ShootingStar } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

function calculateRotation() {
	const DEFAULT_ANGLE = 45;
	const acute = (Math.atan(window.innerWidth / window.innerHeight) * 180) / Math.PI;
	return acute + 180 - DEFAULT_ANGLE;
}

function DottedBackground() {
	const startRotationDeg = calculateRotation();

	return (
		<div
			className={twMerge("absolute inset-0 -z-10 h-dvh w-full overflow-hidden", styles["fade-in"])}
			style={{ perspective: "1000px" }}
		>
			{/* FADE OUT GRADIANT */}
			<div
				className={twMerge("absolute left-0 top-0 z-30 h-full w-full", styles["fade-out"])}
			></div>

			{/* VIGNETTE */}
			<div
				className={twMerge("absolute left-0 top-0 z-20 h-full w-full", styles["vignette"])}
			></div>

			{/* SHOOTING STARS */}
			<div
				className={twMerge(
					"absolute left-0 top-0 z-10 h-full w-full text-xl antialiased",
					styles["star-wrapper"],
				)}
			>
				<ShootingStar
					className={twMerge("absolute -translate-x-16 translate-y-16", styles["star"])}
					style={{ rotate: `${startRotationDeg}deg` }}
					weight="fill"
				/>
				<ShootingStar
					className={twMerge("-translate-y-20] absolute -translate-x-4", styles["star"])}
					style={{ rotate: `${startRotationDeg}deg` }}
					weight="fill"
				/>
				<ShootingStar
					className={twMerge("translate-x-32] absolute", styles["star"])}
					style={{ rotate: `${startRotationDeg}deg` }}
					weight="fill"
				/>
			</div>

			{/* DOTTED BACKGROUND */}
			<div className={twMerge("h-full w-full", styles["background"])}></div>
		</div>
	);
}

export default DottedBackground;
