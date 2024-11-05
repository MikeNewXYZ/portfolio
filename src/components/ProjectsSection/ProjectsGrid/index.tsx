"use client";
import type { Project } from "@/actions/get-projects";
import { useState } from "react";
import getProjects from "@/actions/get-projects";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";
import ProjectCard from "../ProjectCard";

type Props = {
	initalProjects: Project[];
	initalProjectsAmount: number;
};

export default function ProjectsGrid({ initalProjects, initalProjectsAmount }: Props) {
	const [projects, setProjects] = useState(initalProjects);
	const [noMoreProjects, setNoMoreProjects] = useState(false);
	const [offset, setOffset] = useState(initalProjectsAmount);
	const [isLoading, setIsLoading] = useState(false);

	const loadMoreProjects = async () => {
		setIsLoading(true);
		const newProjects = await getProjects({ offset: offset, limit: initalProjectsAmount });
		setIsLoading(false);

		setProjects([...projects, ...newProjects]);
		setOffset((prevOffset) => prevOffset + initalProjectsAmount);

		if (newProjects.length < initalProjectsAmount) setNoMoreProjects(true);
	};

	return (
		<>
			{/* ANCHOR Projects Grid */}
			<div
				id="projects-grid"
				className="mt-20 grid w-full grid-cols-1 justify-center gap-8 sm:gap-16 md:grid-cols-2 xl:grid-cols-3"
			>
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>

			{/* ANCHOR Load More Projects */}
			<div className="group mt-10 sm:mt-14">
				{noMoreProjects ? (
					<div className="flex items-center gap-2">
						<Icon className="animate-spin text-2xl" icon="ph:smiley-sad" />
						<p className="text-lg uppercase">no more projects</p>
					</div>
				) : (
					<button
						className={twMerge(
							"button flex items-center gap-1 border-2 px-2 py-1 text-xl",
							isLoading && "animate-pulse",
						)}
						disabled={isLoading}
						onClick={loadMoreProjects}
					>
						<Icon
							className={twMerge("text-xl", isLoading && "animate-spin")}
							icon={isLoading ? "ph:spiral" : "ph:shooting-star-fill"}
						/>
						<span>load more</span>
					</button>
				)}
			</div>
		</>
	);
}
