import { type ImageMetadata } from "astro";
import { type Projects } from "./type";
import { getCollection } from "astro:content";
import { getImage } from "astro:assets";

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
