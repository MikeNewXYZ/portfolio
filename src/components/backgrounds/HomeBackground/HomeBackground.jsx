import { ShootingStar } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export default function HomeBackground() {
	return (
		<div className="fixed left-0 top-0 -z-10 h-dvh w-full" style={{ perspective: "1000px" }}>
			<div className={`${styles.vignette} absolute left-0 top-0 z-20 h-full w-full`}></div>
			<div
				className={`${styles["star-wrapper"]} absolute left-0 top-0 z-10 h-full w-full text-xl antialiased`}
			>
				<ShootingStar
					className={`${styles.star} absolute -translate-x-16 translate-y-16 rotate-[190deg]`}
					weight="fill"
				/>
				<ShootingStar
					className={`${styles.star} absolute -translate-x-4 -translate-y-20 rotate-[190deg]`}
					weight="fill"
				/>
				<ShootingStar
					className={`${styles.star} absolute translate-x-32 rotate-[190deg]`}
					weight="fill"
				/>
			</div>
			<div className={`${styles.background} h-full w-full`}></div>
		</div>
	);
}
