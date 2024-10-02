import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getEntry } from "astro:content";

export const GET: APIRoute = async ({ url }) => {
	const resumePageEntry: CollectionEntry<"resumePage"> = await getEntry("resumePage", "index");
	const resumePath = resumePageEntry.data.resume;

	return fetch(url.origin + resumePath);
};
