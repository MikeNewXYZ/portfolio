import { createDirectus, rest } from "@directus/sdk";
import type { CustomDirectusTypes } from "./types";

const client = createDirectus<CustomDirectusTypes>(process.env.DIRECTUS_URL as string).with(rest());

export default client;
