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

// ANCHOR CONTACT PAGE
const contactPage = defineCollection({
	type: "data",
	schema: z.object({
		contactFormAccessKey: z.string(),
		contactDetails: z.array(
			z.object({
				icon: z.string(),
				label: z.string(),
				url: z.string().url(),
			}),
		),
	}),
});

// ANCHOR RESUME PAGE
const resumePage = defineCollection({
	type: "data",
	schema: z.object({
		resume: z.string(),
	}),
});

// ANCHOR PROJECTS COLLECTION
const projectsCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		thumbnail: z.string(),
		technologies: z.array(z.string()),
		links: z
			.object({
				view: z
					.object({
						label: z.string(),
						url: z.string().url(),
					})
					.optional(),
				repo: z
					.object({
						label: z.string(),
						url: z.string().url(),
					})
					.optional(),
			})
			.optional(),
	}),
});

export const collections = {
	defaultMetadata: defaultMetadata,
	header: header,
	footer: footer,
	homePage: homePage,
	contactPage: contactPage,
	resumePage: resumePage,
	projectsCollection: projectsCollection,
};
