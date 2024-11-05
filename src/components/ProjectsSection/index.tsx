import getProjects from "@/actions/get-projects";
import ProjectsGrid from "./ProjectsGrid";

const INITIAL_PROJECTS_AMOUNT = 6;

export default async function ProjectsSection() {
	const projects = await getProjects({ offset: 0, limit: INITIAL_PROJECTS_AMOUNT });

	return (
		<section
			id="projects-section"
			className="container mx-auto flex flex-col items-center px-2 pb-8"
		>
			{/* ANCHOR Section Heading */}
			<div className="mt-10 w-full max-w-[30rem] text-center sm:mt-12">
				<h1 className="text-5xl font-bold uppercase sm:text-8xl">projects</h1>
				<p className="mt-1 text-pretty text-base opacity-90">
					Here&apos;s a bunch of my personal and professional projects.
				</p>
			</div>

			{/* ANCHOR Projects Grid */}
			<ProjectsGrid initalProjects={projects} initalProjectsAmount={INITIAL_PROJECTS_AMOUNT} />
		</section>
	);
}
