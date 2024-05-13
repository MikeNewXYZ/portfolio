import nodemailer from "nodemailer";

const port = process.env.PORT || 3000;
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: "gmail",
	port: port,
	auth: {
		user: email,
		pass: pass,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};
