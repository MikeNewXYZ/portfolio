import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import BackToHomeLink from "@/components/BackToHomeLink/BackToHomeLink";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import { toast } from "react-toastify";

// TODO: ADD Open graph metadata

export async function getStaticProps() {
	const fetchUrls = [
		"https://portfolio-cms.mikenew.xyz/items/projects_page",
		"https://portfolio-cms.mikenew.xyz/items/projects_data?limit=6&page=1",
	];

	try {
		const responses = await Promise.all(fetchUrls.map((url) => fetch(url)));

		const failedResponses = responses.filter((res) => !res.ok);
		if (failedResponses.length > 0) throw new Error("Failed to fetch one or more resources");

		const responseObjects = await Promise.all(responses.map((res) => res.json()));

		return {
			props: { projectPage: responseObjects[0].data, initialProjectsData: responseObjects[1].data },
		};
	} catch (error) {
		console.error(error);
		return { notFound: true };
	}
}

export default function ProjectsPage({ projectPage, initialProjectsData }) {
	const [projectsData, setProjectsData] = useState(initialProjectsData);
	const [noMoreProjectsData, setNoMoreProjectsData] = useState(false);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const fetchMoreProjectsData = async () => {
		setLoading(true);
		toast("fetching more projects");

		try {
			const response = await fetch(
				`https://portfolio-cms.mikenew.xyz/items/projects_data?limit=6&page=${page + 1}`,
			);

			if (!response.ok) throw new Error("Failed to fetch projects data.");

			const responseObjects = await response.json();
			const data = responseObjects.data;

			console.log(data);

			if (data.length <= 0) {
				setNoMoreProjectsData(true);
				return;
			}

			setPage((prev) => prev + 1);
			setLoading(false);
			setProjectsData((prev) => [...prev, ...data]);
		} catch (error) {}
	};

	const onScroll = useCallback(async () => {
		if (loading || noMoreProjectsData) return;

		const scrollAmount = window.innerHeight + window.scrollY;
		const pageHeight = document.body.offsetHeight;

		if (scrollAmount >= pageHeight) {
			await fetchMoreProjectsData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading, noMoreProjectsData, page]);

	useEffect(() => {
		addEventListener("scroll", onScroll);

		return () => removeEventListener("scroll", onScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [onScroll]);

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

					<div className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 sm:gap-14 md:mt-12 lg:grid-cols-2 xl:grid-cols-3">
						{projectsData.map(
							({ title, thumbnail, description, technologies, app_url, repo_url }, index) => (
								<Projects.Card
									key={index}
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
