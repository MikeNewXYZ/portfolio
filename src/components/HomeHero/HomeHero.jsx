import { useContext } from "react";
import { HomeTitleContext } from "@context/AppContext";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function HomeHero() {
	const navigate = useNavigate();
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
						onClick={() => navigate("/resume")}
						onMouseEnter={() => setHomeTitle("resume")}
						onMouseLeave={resetHomeTitle}
						role="link"
						aria-label="go to resume page"
					>
						resume
					</Button>
					<Button
						className="px-2 py-1 sm:text-base"
						onClick={() => navigate("/projects")}
						onMouseEnter={() => setHomeTitle("projects")}
						onMouseLeave={resetHomeTitle}
						role="link"
						aria-label="go to projects page"
					>
						projects
					</Button>
				</div>
			</div>
		</main>
	);
}