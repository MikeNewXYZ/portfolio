import ContactBackground from "@/backgrounds/ContactBackground/ContactBackground";
import Head from "next/head";

// TODO: ADD Open graph metadata

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact - MikeNewXYZ</title>
				<meta name="description" content="Contact MikeNewXYZ" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Shopify Themes, Liquid & ReactJS" />
				<meta name="author" content="MikeNewXYZ" />
			</Head>

			<main> Contact Page </main>

			<ContactBackground />
		</>
	);
}
