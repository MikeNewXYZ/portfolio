"use server";
import type { Query } from "@directus/sdk";
import type { CustomDirectusTypes, FooterPartial } from "@/lib/directus-client/types";
import client from "@/lib/directus-client";
import { readSingleton } from "@directus/sdk";

export type Footer = {
	creditLink: {
		icon?: string;
		label: string;
		url: string;
		isExternal: boolean;
	};
	socialLinks: {
		icon?: string;
		label: string;
		url: string;
		isExternal: boolean;
	}[];
};

export default async function getFooter(
	query?: Query<CustomDirectusTypes, FooterPartial>,
): Promise<Footer> {
	try {
		const result = await requestFooter(query);
		return restructureFooter(result);
	} catch (error) {
		console.error("Error in getFooter:", error);
		throw error;
	}
}
getFooter();

async function requestFooter(query?: Query<CustomDirectusTypes, FooterPartial>) {
	return client.request(
		readSingleton("footer_partial", {
			...query,
			fields: [
				{ credit_link: ["icon", "label", "url", "is_external"] },
				{ social_links: [{ socials_id: [{ link: ["icon", "label", "url", "is_external"] }] }] },
			],
		}),
	);
}

function restructureFooter(result: Awaited<ReturnType<typeof requestFooter>>): Footer {
	return {
		creditLink: {
			icon: result.credit_link?.icon as string | undefined,
			label: result.credit_link?.label as string,
			url: result.credit_link?.url as string,
			isExternal: result.credit_link?.is_external as boolean,
		},
		socialLinks: result.social_links?.map((link) => ({
			icon: link.socials_id.link.icon as string | undefined,
			label: link.socials_id.link.label as string,
			url: link.socials_id.link.url as string,
			isExternal: link.socials_id.link.is_external as boolean,
		})) as [],
	};
}
