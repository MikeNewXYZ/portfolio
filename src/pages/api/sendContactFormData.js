import { createDirectus, rest, createItem } from "@directus/sdk";
import validator from "validator";
import xss from "xss";

const client = createDirectus("https://portfolio-cms.mikenew.xyz").with(rest());

export default async function sendContactFormData(req, res) {
	const requestMethod = req.method;
	const body = JSON.parse(req.body);

	// Sanitize inputs
	const formEmail = xss(body.email);
	const formSubject = xss(body.subject);
	const formBody = xss(body.body);

	// Validation function
	const validateInputs = () => {
		if (!formEmail || !formSubject || !formBody) {
			return "All form fields are required.";
		}
		if (!validator.isEmail(formEmail)) {
			return "Email field needs to be an email.";
		}
		return null;
	};

	switch (requestMethod) {
		case "POST":
			const validationError = validateInputs();
			if (validationError) {
				res.status(400).send(validationError);
				return;
			}

			try {
				await client.request(
					createItem("contact_form_data", {
						email: formEmail,
						subject: formSubject,
						body: formBody,
					}),
				);
				res.status(204).send();
			} catch (error) {
				console.error("Error saving contact form data:", error);
				res.status(500).send("An error occurred while saving the form data.");
			}
			break;

		default:
			res.status(405).send("Method Not Allowed");
	}
}
