import { transporter, mailOptions } from "@/config/nodemailer";
import validator from "validator";
import xss from "xss";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body;

		// Check for XSS attack
		data.email = xss(data.email);
		data.subject = xss(data.subject);
		data.body = xss(data.body);

		// Check if all form inputs are filled
		if (!data.email || !data.subject || !data.body) {
			return res.status(400).json({ message: "Bad request" });
		}

		// Check if email is valid
		if (!validator.isEmail(data.email)) {
			return res.status(400).json({ message: "Bad email" });
		}

		// Send mail
		try {
			await transporter.sendMail({
				...mailOptions,
				subject: `${data.subject} (FROM MIKENEW.XYZ)`,
				html: `
					<p>
						<b>Email:</b>
						<span>${data.email}</span>
					</p>
					
					<p>
						<b>Body:</b>
						<span>${data.body}</span>
					</p>
				`,
			});

			return res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);
			return res.status(400).json({ message: error.message });
		}
	}

	return res.status(400).json({ message: "Bad request" });
};

export default handler;
