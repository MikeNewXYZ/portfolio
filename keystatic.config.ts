import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
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
				thumbnailImageFileName: fields.image({
					label: "thumbnailImageFileName",
					validation: { isRequired: true },
				}),
				technologies: fields.array(
					fields.text({ label: "technology", validation: { isRequired: true } }),
					{
						label: "Technologies",
						itemLabel: (props) => props.value,
					},
				),
				viewLink: fields.conditional(
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
				repoLink: fields.conditional(
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
			},
		}),
	},
});
