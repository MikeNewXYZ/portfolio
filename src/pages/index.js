import Head from "next/head";
import HomeBackground from "@/backgrounds/HomeBackground/HomeBackground";

// TODO: ADD Open graph metadata
// TODO: ADD Animated background
// TODO: ADD Floating header with navigation
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
	console.log(pageData);

	return (
		<>
			<Head>
				<title>Portfolio - MikeNewXYZ</title>
				<meta name="description" content="Front-end and Shopify Themes Developer" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main> hello world </main>

			<HomeBackground />
		</>
	);
}
