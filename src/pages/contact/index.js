import Head from "next/head";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import BackToHomeLink from "@/components/BackToHomeLink/BackToHomeLink";

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

			<main className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 landscape:pb-2 md:landscape:pb-10">
				<Contact.ContactForm />

				<BackToHomeLink />
			</main>

			<Background.Contact />
		</>
	);
}
