import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "throttle-debounce";

export default function Projects() {
	const wrapperRef = useRef(null);
	const [blobPos, setBlobPos] = useState(null);

	const animateBlob = debounce(
		100,
		(e) => {
			const y = e.clientY;
			const x = e.clientX;

			setBlobPos({ top: y, left: x });
		},
		{ atBegin: false },
	);

	const setInitialBlobPos = () => {
		const { height, width } = wrapperRef.current.getBoundingClientRect();

		setBlobPos({ top: height / 2, left: width / 2 });
	};

	useEffect(() => {
		setInitialBlobPos();

		addEventListener("mousemove", animateBlob);
		addEventListener("resize", setInitialBlobPos);

		return () => {
			removeEventListener("mousemove", animateBlob);
			removeEventListener("resize", setInitialBlobPos);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div ref={wrapperRef} className="fixed left-0 top-0 -z-10 h-dvh w-full opacity-40 blur-3xl">
			<AnimatePresence initial>
				{blobPos && (
					<motion.div
						className="absolute h-96 w-96 rounded-full bg-gradient-to-tr from-primary to-secondary"
						initial={{
							opacity: 0,
							top: blobPos.top,
							left: blobPos.left,
							y: "-50%",
							x: "-50%",
						}}
						animate={{
							opacity: 1,
							top: blobPos.top,
							left: blobPos.left,
							rotate: [0, 360],
							y: "-50%",
							x: "-50%",
						}}
						transition={{
							opacity: { duration: 2 },
							top: { type: "spring", stiffness: 40, damping: 150, mass: 400 },
							left: { type: "spring", stiffness: 40, damping: 150, mass: 400 },
							rotate: { duration: 20, repeat: Infinity },
						}}
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
