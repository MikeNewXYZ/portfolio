// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media],
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
	plugins: [
		payloadCloudPlugin(),
		// storage-adapter-placeholder
	],
});
