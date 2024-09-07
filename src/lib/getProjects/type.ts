import { type GetImageResult } from "astro";

export type Projects = {
	id: string;
	collection: string;
	data: {
		subtitle: string;
		thumbnailPath: string;
		thumbnailImageData: GetImageResult;
		technologies: string[];
		viewLink:
			| {
					discriminant: true;
					value: {
						label: string;
						url: string;
					};
			  }
			| { discriminant: false };
		repoLink:
			| {
					discriminant: true;
					value: {
						label: string;
						url: string;
					};
			  }
			| { discriminant: false };
	};
}[];
