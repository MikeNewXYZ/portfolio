export type Settings = {
	seo: {
		title: string;
		description: string;
		keywords?: string[];
	};
	other: {
		contactFormAccessKey: string;
		resumeFile: string;
	};
};
