import { useEffect, useRef, useState } from "react";
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
			props: { projectPage: responseObjects[0].data, initialProjectData: responseObjects[1].data },
		};
	} catch (error) {
		console.error(error);
		return { notFound: true };
	}
}

export default function ProjectsPage({ projectPage, initialProjectData }) {
	const isLoading = useRef(false);
	const projectsDataPage = useRef(2);
	const allProjectsDataLoaded = useRef(false);
	const [projectsData, setProjectsData] = useState(initialProjectData);

	const fetchMoreProjectsData = async () => {
		isLoading.current = true;
		toast("Loading more projects");

		try {
			const response = await fetch(
				`https://portfolio-cms.mikenew.xyz/items/projects_data?limit=6&page=${projectsDataPage.current}`,
			);

			if (!response.ok) throw new Error("Failed to load projects");

			const responseObjects = await response.json();
			const data = responseObjects.data;

			if (data.length <= 0) {
				allProjectsDataLoaded.current = true;
				throw new Error("All projects loaded");
			}

			setProjectsData((prev) => [...prev, ...data]);
			projectsDataPage.current++;
		} catch (error) {
			toast(error.message);
		} finally {
			isLoading.current = false;
		}
	};

	const onScroll = () => {
		if (isLoading.current || allProjectsDataLoaded.current) return;

		const scrollAmount = window.innerHeight + window.scrollY;
		const pageHeight = document.body.offsetHeight;

		if (scrollAmount >= pageHeight - 50) {
			fetchMoreProjectsData();
		}
	};

	useEffect(() => {
		addEventListener("scroll", onScroll);

		return () => removeEventListener("scroll", onScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

					<div className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 sm:gap-14 md:mt-12 lg:grid-cols-2 xl:grid-cols-3">
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
