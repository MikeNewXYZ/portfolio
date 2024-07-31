import { useState } from "react";
import Head from "next/head";
import Background from "@/components/Background";
import Home from "@/components/Home";

// TODO: ADD Open graph metadata

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

	const resetHeaderTitle = () => setHeaderTitle(pageData.header_default_title);

	return (
		<>
			<Head>
				<title>Portfolio - MikeNewXYZ</title>
				<meta name="description" content="Front-end and Shopify Themes Developer" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 landscape:pb-2 md:landscape:pb-10">
				<Home.Header
					topText={pageData.header_top_text}
					title={headerTitle}
					setTitle={setHeaderTitle}
					resetTitle={resetHeaderTitle}
					subText={pageData.header_subtext}
					navigationLinks={pageData.header_navigation_links}
				/>

				<Home.ContactLink
					linkText={pageData.contact_link_text}
					linkPath={pageData.contact_link_path}
					setHeaderTitle={setHeaderTitle}
					resetHeaderTitle={resetHeaderTitle}
				/>
			</main>

			<Background.Home />
		</>
	);
}
