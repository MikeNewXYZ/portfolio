import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			thumbnail: image(),
			technologies: z.array(z.string()),
			viewLink: z
				.object({
					label: z.string(),
					url: z.string().url(),
				})
				.optional(),
			repoLink: z
				.object({
					label: z.string(),
					url: z.string().url(),
				})
				.optional(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
