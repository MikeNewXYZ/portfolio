"use client";
import { useState } from "react";
import Heading from "./heading/heading";
import NavButtons from "./nav-buttons/nav-buttons";
import Subheading from "./subheading/subheading";
import { useMainTextContext } from "@/context/main-text-context/main-text-context";

export default function Hero() {
	const { mainText } = useMainTextContext();

	return (
		<main className="flex h-screen w-full flex-col items-center justify-center pb-10 text-center">
			<Heading topText="hello there" mainText={mainText} />

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
