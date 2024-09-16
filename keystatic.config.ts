import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
	ui: {
		brand: { name: "MikeNewXYZ" },
		navigation: {
			settings: ["defaultMetadata"],
			content: ["contactPage", "resumePage"],
			collections: ["projects"],
		},
	},
	storage: {
		kind: "local",
	},
	singletons: {
		// ANCHOR CONTACT PAGE
		contactPage: singleton({
			label: "Contact Page",
			path: "src/content/contactPage/",
			format: { data: "json" },
			schema: {
				contactFormAccessKey: fields.text({
					label: "Contact Form Access Key",
					validation: { isRequired: true },
				}),
				contactDetails: fields.array(
					fields.object({
						icon: fields.text({ label: "Icon", validation: { isRequired: true } }),
						label: fields.text({ label: "Label", validation: { isRequired: true } }),
						url: fields.url({ label: "URL", validation: { isRequired: true } }),
					}),
					{ label: "Contact Details", itemLabel: (props) => props.fields.label.value },
				),
			},
		}),
		// ANCHOR RESUME PAGE
		resumePage: singleton({
			label: "Resume Page",
			path: "src/content/resumePage/",
			format: { data: "json" },
			schema: {
				resume: fields.file({
					label: "Resume File",
					directory: "/public/files/resumePage/",
					publicPath: "/public/files/resumePage/",
					validation: { isRequired: true },
				}),
			},
		}),
		// ANCHOR DEFAULT METADATA
		defaultMetadata: singleton({
			label: "Default Metadata",
			path: "src/content/defaultMetadata/",
			format: { data: "json" },
			schema: {
				title: fields.text({ label: "Title", validation: { isRequired: true } }),
				description: fields.text({ label: "Description", validation: { isRequired: true } }),
				keywords: fields.array(fields.text({ label: "Keyword" }), {
					label: "Keywords",
					itemLabel: (props) => props.value,
				}),
			},
		}),
	},
	collections: {
		// ANCHOR PROJECTS
		projects: collection({
			label: "Projects",
			slugField: "title",
			path: "src/content/projects/*",
			format: { data: "json" },
			schema: {
				title: fields.text({ label: "Title", validation: { isRequired: true } }),
				subtitle: fields.text({ label: "Subtitle", validation: { isRequired: true } }),
				thumbnailPath: fields.image({
					label: "Thumbnail",
					directory: "/src/assets/images/projects",
					publicPath: "/src/assets/images/projects",
					validation: { isRequired: true },
				}),
				technologies: fields.array(
					fields.text({ label: "technology", validation: { isRequired: true } }),
					{
						label: "Technologies",
						itemLabel: (props) => props.value,
					},
				),
				links: fields.object(
					{
						view: fields.conditional(
							fields.checkbox({
								label: "Enable View Link",
								defaultValue: true,
							}),
							{
								false: fields.empty(),
								true: fields.object({
									label: fields.text({ label: "Label", validation: { isRequired: true } }),
									url: fields.url({ label: "Url", validation: { isRequired: true } }),
								}),
							},
						),
						repo: fields.conditional(
							fields.checkbox({
								label: "Enable Repo Link",
								defaultValue: true,
							}),
							{
								false: fields.empty(),
								true: fields.object({
									label: fields.text({ label: "Label", validation: { isRequired: true } }),
									url: fields.url({ label: "Url", validation: { isRequired: true } }),
								}),
							},
						),
					},
					{ label: "Links" },
				),
			},
		}),
	},
});
