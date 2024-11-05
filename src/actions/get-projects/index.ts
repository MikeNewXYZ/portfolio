"use server";
import type { DirectusFile, Query } from "@directus/sdk";
import type { CustomDirectusTypes, Projects } from "@/lib/directus-client/types";
import client from "@/lib/directus-client";
import { readFile, readItems } from "@directus/sdk";

export type Project = {
	title: string;
	subtitle: string;
	background_image: {
		id: string;
		url: string;
		data: DirectusFile;
	};
	technologies: {
		technology_tags_id: {
			label: string;
			value: string;
		};
	}[];
	main_link_buttons?: {
		links_id: {
			label: string;
			url: string;
			is_external: string;
		};
	}[];
};

export default async function getProjects(
	query?: Query<CustomDirectusTypes, Projects>,
): Promise<Project[]> {
	try {
		const projects = await requestProjects(query);
		return await restructureProjects(projects);
	} catch (error) {
		console.error("Error in getProjects:", error);
		throw error;
	}
}

async function requestProjects(query?: Query<CustomDirectusTypes, Projects>) {
	return client.request(
		readItems("projects", {
			...query,
			fields: [
				"title",
				"subtitle",
				"background_image",
				{ technologies: [{ technology_tags_id: ["label", "value"] }] },
				{ main_link_buttons: [{ links_id: ["label", "url", "is_external"] }] },
			],
		}),
	);
}

async function restructureProjects(
	projects: Awaited<ReturnType<typeof requestProjects>>,
): Promise<Project[]> {
	const newProjects = [];

	for (const project of projects) {
		const imageId = project.background_image as string;
		const imageData = await client.request<DirectusFile>(readFile(imageId));

		newProjects.push({
			title: project.title as string,
			subtitle: project.subtitle as string,
			background_image: {
				id: imageId,
				url: (process.env.DIRECTUS_URL_ASSETS as string) + imageId,
				data: imageData,
			},
			technologies: project.technologies as [],
			main_link_buttons: project.main_link_buttons as [],
		});
	}

	return newProjects;
}
