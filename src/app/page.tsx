import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="flex flex-col overflow-x-hidden">
				<HomeHero />
				<ProjectsSection />
			</main>
		</>
	);
}
