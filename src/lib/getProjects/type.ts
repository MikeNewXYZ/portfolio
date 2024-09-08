import { type GetImageResult } from "astro";

export type Projects = {
	id: string;
	collection: string;
	data: {
		subtitle: string;
		thumbnailPath: string;
		thumbnailImageData: GetImageResult;
		technologies: string[];
		links: {
			view:
				| {
						discriminant: true;
						value: {
							label: string;
							url: string;
						};
				  }
				| { discriminant: false };
			repo:
				| {
						discriminant: true;
						value: {
							label: string;
							url: string;
						};
				  }
				| { discriminant: false };
		};
	};
}[];
