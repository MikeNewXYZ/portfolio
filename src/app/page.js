import ContactButton from "@/components/contact-button/contact-button";
import Hero from "@/components/hero/hero";

export default function HomePage() {
	return (
		<>
			<main className="container mx-auto overflow-hidden">
				<Hero />
			</main>

			<ContactButton href="/contact" />
		</>
	);
}
