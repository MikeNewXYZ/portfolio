import Head from "next/head";
import BackToHomeLink from "@/components/BackToHomeLink/BackToHomeLink";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Background from "@/components/Background";

// TODO: ADD Open graph metadata

export async function getStaticProps() {
	const fetchUrls = [
		"https://portfolio-cms.mikenew.xyz/items/projects_page",
		"https://portfolio-cms.mikenew.xyz/items/projects_data",
	];

	try {
		const responses = await Promise.all(fetchUrls.map((url) => fetch(url)));

		const failedResponses = responses.filter((res) => !res.ok);
		if (failedResponses.length > 0) throw new Error("Failed to fetch one or more resources");

		const responseObjects = await Promise.all(responses.map((res) => res.json()));

		return {
			props: { projectPage: responseObjects[0].data, projectsData: responseObjects[1].data },
		};
	} catch (error) {
		console.error(error);
		return { notFound: true };
	}
}

export default function ProjectsPage({ projectPage, projectsData }) {
	useEffect(() => {
		toast("This page is still a work in progress...", { autoClose: 10000 });
	}, []);

	return (
		<>
			<Head>
				<title>Projects - MikeNewXYZ</title>
				<meta name="description" content="Projects by MikeNewXYZ" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main className="w-full px-2 sm:px-4">
				<div className="container mx-auto mb-10 flex flex-col items-center">
					<Projects.Header
						title={projectPage.header_title}
						subtitle={projectPage.header_subtitle}
					/>

					<div className="mt-16 grid w-full grid-cols-1 gap-6 sm:gap-14 lg:grid-cols-2 xl:grid-cols-3">
						{projectsData.map(
							({ id, title, thumbnail, description, technologies, app_url, repo_url }) => (
								<Projects.Card
									key={id}
									title={title}
									thumbnail={thumbnail}
									description={description}
									technologies={technologies}
									appUrl={app_url}
									repoUrl={repo_url}
								/>
							),
						)}
					</div>
				</div>

				<BackToHomeLink />
			</main>

			<Background.Projects />
		</>
	);
}
