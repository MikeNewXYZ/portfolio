import { useState } from "react";
import Head from "next/head";
import HomeBackground from "@/backgrounds/HomeBackground/HomeBackground";
import HomeHeader from "@/components/HomeHeader/HomeHeader";

// TODO: ADD Open graph metadata
// TODO: ADD Contact link

export async function getStaticProps() {
	try {
		const response = await fetch("https://portfolio-cms.mikenew.xyz/items/home_page");
		const responseObject = await response.json();

		if (!responseObject) return { notFound: true };

		return { props: { pageData: responseObject.data } };
	} catch (error) {
		return { notFound: true };
	}
}

export default function HomePage({ pageData }) {
	const [headerTitle, setHeaderTitle] = useState(pageData.header_default_title);

	return (
		<>
			<Head>
				<title>Portfolio - MikeNewXYZ</title>
				<meta name="description" content="Front-end and Shopify Themes Developer" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 landscape:pb-2 md:landscape:pb-10">
				<HomeHeader
					topText={pageData.header_top_text}
					title={headerTitle}
					defaultTitle={pageData.header_default_title}
					setHeaderTitle={setHeaderTitle}
					subText={pageData.header_subtext}
					navigationLinks={pageData.header_navigation_links}
				/>
			</main>

			<HomeBackground />
		</>
	);
}
