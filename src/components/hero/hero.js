"use client";
import Heading from "./heading/heading";
import NavButtons from "./nav-buttons/nav-buttons";
import Subheading from "./subheading/subheading";

export default function Hero() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center pb-10 text-center">
			<Heading topText="hello there" mainText="i'm mike" />

			<Subheading className="mt-4" text="British Web Developer & Designer" />

			<NavButtons
				classNames="mt-6"
				buttons={[
					{ href: "/resume", name: "resume" },
					{ href: "/projects", name: "projects" },
				]}
			/>
		</main>
	);
}
