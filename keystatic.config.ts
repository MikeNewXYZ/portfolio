import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
	ui: {
		brand: { name: "MikeNewXYZ" },
	},
	storage: {
		kind: "local",
	},
	singletons: {
		settings: singleton({
			label: "Settings",
			path: "src/content/settings/",
			format: { data: "json" },
			schema: {
				seo: fields.object(
					{
						title: fields.text({ label: "Title", validation: { isRequired: true } }),
						description: fields.text({ label: "Description", validation: { isRequired: true } }),
						keywords: fields.array(fields.text({ label: "Keyword" }), {
							label: "Keywords",
							itemLabel: (props) => props.value,
						}),
					},
					{ label: "Default Seo" },
				),
				other: fields.object(
					{
						contactFormAccessKey: fields.text({
							label: "Contact Form Access Key",
							validation: { isRequired: true },
						}),
						resumeFilePath: fields.file({
							label: "Resume File",
							directory: "/public/files/settings/",
							publicPath: "/public/files/settings/",
							validation: { isRequired: true },
						}),
					},
					{ label: "Other" },
				),
			},
		}),
	},
	collections: {
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
