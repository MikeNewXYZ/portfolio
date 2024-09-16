import type { CollectionEntry } from "astro:content";
import type { Entry } from "@keystatic/core/reader";
import { type GetImageResult } from "astro";
import type keystaticConfig from "../../../keystatic.config";

export type DefaultMetadata = Entry<(typeof keystaticConfig)["singletons"]["defaultMetadata"]>;
export type ContactPage = Entry<(typeof keystaticConfig)["singletons"]["contactPage"]>;
export type ResumePage = Entry<(typeof keystaticConfig)["singletons"]["resumePage"]>;
export type Projects = {
	[K in keyof CollectionEntry<"projects">]: K extends "data"
		? Entry<(typeof keystaticConfig)["collections"]["projects"]> & {
				thumbnailImageData: GetImageResult;
			}
		: CollectionEntry<"projects">[K];
}[];
