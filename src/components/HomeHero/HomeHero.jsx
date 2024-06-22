import { useContext } from "react";
import { HomeTitleContext } from "@context/AppContext";
import Button from "@components/Button/Button";

export default function HomeHero() {
	const { homeTitle, setHomeTitle, resetHomeTitle } = useContext(HomeTitleContext);

	return (
		<main className="flex h-dvh w-full items-center justify-center overflow-hidden pb-2 landscape:pb-0 md:landscape:pb-10">
			<div className="text-center uppercase">
				<h2 className="text-3xl font-black sm:text-4xl">hello there</h2>
				<h1 className="text-6xl font-black sm:text-8xl">{homeTitle}</h1>
				<p className="mt-3 text-sm normal-case sm:text-base">Experienced British Web Developer</p>
				<div
					className="mt-6 flex justify-center gap-4"
					role="group"
					aria-label="navigation buttons"
				>
					<Button
						className="px-2 py-1 sm:text-base"
						onMouseEnter={() => setHomeTitle("resume")}
						onMouseLeave={resetHomeTitle}
					>
						resume
					</Button>
					<Button
						className="px-2 py-1 sm:text-base"
						onMouseEnter={() => setHomeTitle("projects")}
						onMouseLeave={resetHomeTitle}
					>
						projects
					</Button>
				</div>
			</div>
		</main>
	);
}
