import { type Settings } from "./type";
import { getCollection } from "astro:content";

async function getProjects() {
	const settingsArray = await getCollection("settings");
	const settings: Settings = settingsArray[0].data;
	return settings;
}

export default getProjects;
