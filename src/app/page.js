import ContactButton from "@/components/contact-button/contact-button";
import Hero from "@/components/hero/hero";

export default function Home() {
	return (
		<>
			<main className="container mx-auto">
				<Hero />
			</main>

			<ContactButton href="/contact" />
		</>
	);
}
