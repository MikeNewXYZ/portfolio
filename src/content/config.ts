import { z, defineCollection } from "astro:content";

// ANCHOR DEFAULT METADATA
const defaultMetadata = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.array(z.string()),
	}),
});

// ANCHOR HEADER
const header = defineCollection({
	type: "data",
	schema: z.object({
		brand: z.object({
			label: z.string(),
			url: z.string().url(),
		}),
		navigationMenu: z.array(
			z.object({
				label: z.string(),
				url: z.string().url(),
			}),
		),
	}),
});

export const collections = {
	defaultMetadata: defaultMetadata,
	header: header,
};
