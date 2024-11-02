"use client";
import { Icon } from "@iconify/react";

export default function ViewProjectsButton() {
	const scrollTo = () => {
		const element = document.getElementById("projects-section");

		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div className="absolute bottom-5 flex animate-pulse flex-col items-center justify-center">
			<div className="text-center text-sm uppercase sm:text-base">view projects</div>

			<button
				className="text-5xl transition-transform duration-500 ease-in-out hover:scale-95 sm:text-6xl"
				title="View Projects"
				onClick={scrollTo}
			>
				<Icon icon="ph:caret-circle-down-fill" />
			</button>
		</div>
	);
}
