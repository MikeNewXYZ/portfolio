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

// ANCHOR FOOTER
const footer = defineCollection({
	type: "data",
	schema: z.object({
		brandLink: z.object({
			label: z.string(),
			url: z.string().url(),
		}),
		socialLinks: z.array(
			z.object({
				icon: z.string(),
				alt: z.string(),
				url: z.string().url(),
			}),
		),
	}),
});

// ANCHOR HOME PAGE
const homePage = defineCollection({
	type: "data",
	schema: z.object({
		hero: z.object({
			heading: z.object({
				topText: z.string(),
				title: z.string(),
				subtitle: z.string(),
			}),
			actionLink: z.object({
				label: z.string(),
				url: z.string().url(),
			}),
		}),
	}),
});

export const collections = {
	defaultMetadata: defaultMetadata,
	header: header,
	footer: footer,
	homePage: homePage,
};
