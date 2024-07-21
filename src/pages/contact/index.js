import Head from "next/head";
import ContactBackground from "@/backgrounds/ContactBackground/ContactBackground";
import IntroHeading from "@/components/IntroHeading/IntroHeading";

// TODO: ADD Open graph metadata

export async function getStaticProps() {
	try {
		const response = await fetch("https://portfolio-cms.mikenew.xyz/items/contact_page");
		const responseObject = await response.json();

		if (!responseObject) return { notFound: true };

		return { props: { pageData: responseObject.data } };
	} catch (error) {
		return { notFound: true };
	}
}

export default function ContactPage({ pageData }) {
	return (
		<>
			<Head>
				<title>Contact - MikeNewXYZ</title>
				<meta name="description" content="Contact MikeNewXYZ" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 landscape:pb-2 md:landscape:pb-10">
				<IntroHeading
					title={pageData.intro_heading_title}
					subTitle={pageData.intro_heading_subtitle}
				/>
			</main>

			<ContactBackground />
		</>
	);
}
