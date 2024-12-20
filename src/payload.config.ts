import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: sqliteAdapter({
		client: {
			url: process.env.PAYLOAD_DATABASE_URI || "",
		},
	}),
	email: nodemailerAdapter({
		defaultFromAddress: process.env.PAYLOAD_EMAIL_FROM_ADDRESS || "",
		defaultFromName: process.env.PAYLOAD_EMAIL_FROM_NAME || "",
		transportOptions: {
			host: process.env.PAYLOAD_EMAIL_SMPT_HOST,
			port: process.env.PAYLOAD_EMAIL_SMPT_PORT,
			auth: {
				user: process.env.PAYLOAD_EMAIL_SMTP_USER,
				pass: process.env.PAYLOAD_EMAIL_SMTP_PASSWORD,
			},
		},
	}),
	sharp,
	plugins: [],
});
