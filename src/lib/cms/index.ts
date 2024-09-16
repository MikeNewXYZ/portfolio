import type { ContactPage, DefaultMetadata, ResumePage, Projects } from "./types";
import type { ImageMetadata } from "astro";
import { getCollection } from "astro:content";
import { getImage } from "astro:assets";

// ANCHOR DEFAULT METADATA
export async function getDefaultMetadata(): Promise<DefaultMetadata> {
	const defaultMetadataArray = await getCollection("defaultMetadata");
	const defaultMetadata: DefaultMetadata = defaultMetadataArray[0].data;
	return defaultMetadata;
}

// ANCHOR CONTACT PAGE
export async function getContactPage(): Promise<ContactPage> {
	const contactPageArray = await getCollection("contactPage");
	const contactPage: ContactPage = contactPageArray[0].data;
	return contactPage;
}

// ANCHOR RESUME PAGE
export async function getResumePage(): Promise<ResumePage> {
	const resumePageArray = await getCollection("resumePage");
	const resumePage: ResumePage = resumePageArray[0].data;
	return resumePage;
}

// ANCHOR PROJECTS
export async function getProjects(): Promise<Projects> {
	const projects: Projects = await getCollection("projects");

	const optimizedImages = import.meta.glob<{ default: ImageMetadata }>(
		"/src/assets/images/projects/**/*.{jpeg,jpg,png,gif,webp}",
	);
	for (let i = 0; i < projects.length; i++) {
		const project = projects[i];

		project.data.thumbnailImageData = await getImage({
			src: optimizedImages[project.data.thumbnailPath](),
			format: "webp",
		});
	}

	return projects;
}
