import { type GetImageResult, type ImageMetadata } from "astro";
import { getCollection } from "astro:content";
import { getImage } from "astro:assets";

export type Projects = {
	id: string;
	collection: string;
	data: {
		subtitle: string;
		thumbnailPath: string;
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

	const images = import.meta.glob<{ default: ImageMetadata }>(
		"/src/assets/images/projects/**/*.{jpeg,jpg,png,gif,webp}",
	);

	for (let i = 0; i < projects.length; i++) {
		const project = projects[i];

		project.data.thumbnailImageData = await getImage({
			src: images[project.data.thumbnailPath](),
			format: "webp",
		});
	}

	return projects;
}

export default getProjects;
