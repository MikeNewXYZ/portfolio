import HomeHero from "@/components/HomeHero/HomeHero";
import HomeBackground from "@/components/backgrounds/HomeBackground/HomeBackground";
import ContactButton from "@/components/ContactButton/ContactButton";

const heroVariant = {
	hide: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "anticipate",
		},
	},
};

const contactVariant = {
	hide: {
		opacity: 0,
		y: "100%",
	},
	show: {
		opacity: 1,
		y: "0%",
		transition: {
			delay: 0.5,
		},
	},
};

export default function HomePage() {
	return (
		<>
			<HomeHero variants={heroVariant} />
			<ContactButton variants={contactVariant} />
			<HomeBackground />
		</>
	);
}
