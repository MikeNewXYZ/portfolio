import { getCollection } from "astro:content";
import { getImage } from "astro:assets";
import { type GetImageResult } from "astro";

export type Projects = {
	id: string;
	collection: string;
	data: {
		subtitle: string;
		thumbnailImageFileName: string;
		thumbnailImageData: GetImageResult;
		technologies: string[];
		viewLink:
			| {
					discriminant: true;
					value: {
						label: string;
						url: string;
					};
			  }
			| { discriminant: false };
		repoLink:
			| {
					discriminant: true;
					value: {
						label: string;
						url: string;
					};
			  }
			| { discriminant: false };
	};
}[];

async function getProjects() {
	const projects: Projects = await getCollection("projects");

	for (let i = 0; i < projects.length; i++) {
		const project = projects[i];

		const thumbnailImageFileName = await import(
			/* @vite-ignore */
			`../../content/projects/${project.id}/${project.data.thumbnailImageFileName}`
		);

		project.data.thumbnailImageData = await getImage({
			src: thumbnailImageFileName.default,
			format: "webp",
		});
	}

	return projects;
}

export default getProjects;
