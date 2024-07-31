import { useEffect, useState } from "react";
import { ShootingStar } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export default function Home() {
	const [rotateDeg, setRotateDeg] = useState(0);

	useEffect(() => {
		calcRotation();

		window.addEventListener("resize", calcRotation);

		return () => window.removeEventListener("resize", calcRotation);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Finds the angle in which the shooting star
	// faces the bottom left corner of the screen.
	const calcRotation = () => {
		// By default the icon is rotated 45deg.
		const DEFAULT_ANGLE = 45;

		// Find the acute angle and convert from radian to degrees.
		const acute = (Math.atan(window.innerWidth / window.innerHeight) * 180) / Math.PI;

		// Set rotation state.
		// Add 180 for the remaining degrees.
		// Take away DEFAULT_ANGLE to account for default rotation.
		setRotateDeg(acute + 180 - DEFAULT_ANGLE);
	};

	return (
		<div className="fixed left-0 top-0 -z-10 h-dvh w-full" style={{ perspective: "1000px" }}>
			<div className={`${styles.vignette} absolute left-0 top-0 z-20 h-full w-full`}></div>
			<div
				className={`${styles["star-wrapper"]} absolute left-0 top-0 z-10 h-full w-full text-xl antialiased`}
			>
				<ShootingStar
					className={`${styles.star} absolute -translate-x-16 translate-y-16`}
					style={{ rotate: `${rotateDeg}deg` }}
					weight="fill"
				/>
				<ShootingStar
					className={`${styles.star} -translate-y-20] absolute -translate-x-4`}
					style={{ rotate: `${rotateDeg}deg` }}
					weight="fill"
				/>
				<ShootingStar
					className={`${styles.star} translate-x-32] absolute`}
					style={{ rotate: `${rotateDeg}deg` }}
					weight="fill"
				/>
			</div>
			<div className={`${styles.background} h-full w-full`}></div>
		</div>
	);
}
