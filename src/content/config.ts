import { z, defineCollection } from "astro:content";

const headerSingleton = defineCollection({
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
	headerSingleton: headerSingleton,
};
