import type { CollectionEntry } from "astro:content";
import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { getEntry } from "astro:content";

const postContactForm = defineAction({
	accept: "form",
	input: z.object({
		name: z.string().min(1),
		email: z.string().email().min(5),
		message: z.string().min(1).max(500),
	}),
	handler: async (input) => {
		const contactPageEntry: CollectionEntry<"contactPage"> = await getEntry("contactPage", "index");
		const { contactFormAccessKey } = contactPageEntry.data;

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				access_key: contactFormAccessKey,
				...input,
			}),
		});
		const result = await response.json();
		if (result.success) return input;

		throw new ActionError({
			code: result.statusCode,
			message: result.body.message,
		});
	},
});

export default postContactForm;
