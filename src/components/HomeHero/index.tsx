import Link from "next/link";
import FloatingCard from "@/components/FloatingCard";
import DottedBackground from "./DottedBackground";
import ViewProjectsButton from "./ViewProjectsButton";

export default function HomeHero() {
	return (
		<section className="relative h-dvh w-full overflow-hidden">
			<div className="container relative mx-auto flex h-full items-center justify-center p-2 landscape:pb-2 md:landscape:pb-16">
				{/* ANCHOR Heading */}
				<FloatingCard innerClassName="text-center">
					<h2 className="text-3xl font-black uppercase sm:text-5xl">hello there</h2>
					<h1 className="text-6xl font-black uppercase sm:text-9xl">i&apos;m mike</h1>
					<p className="mx-auto mt-1 max-w-96 text-balance text-base normal-case sm:text-xl">
						Experienced British Web Developer & Hobbyist Game Developer
					</p>

					<Link
						href="/blog"
						className="button mt-4 inline-block px-1.5 py-0.5 text-center text-sm sm:text-xl"
					>
						check out my blog
					</Link>
				</FloatingCard>

				{/* ANCHOR View Projects Button */}
				<ViewProjectsButton />
			</div>

			{/* ANCHOR Dotted Background */}
			<DottedBackground />
		</section>
	);
}
