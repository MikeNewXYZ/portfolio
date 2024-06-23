import HomeHero from "@/components/HomeHero/HomeHero";
import HomeBackground from "@/components/backgrounds/HomeBackground/HomeBackground";
import ContactButton from "@/components/ContactButton/ContactButton";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<ContactButton />
			<HomeBackground />
		</>
	);
}
