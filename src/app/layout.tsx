import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

const SpaceGrotesk = localFont({
	src: "./fonts/SpaceGrotesk.ttf",
	variable: "--space-grotesk",
});

export const metadata: Metadata = {
	title: "MikeNewXYZ - Portfolio",
	description: "Full-Stack Web Developer | ReactJS, NextJS, TypeScript and Shopify Themes.",
	keywords: ["Portfolio", "Web Developer", "ReactJS", "NextJS", "TypeScript", "Shopify Themes"],
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="en">
			<body className={twMerge("bg-secondary text-primary antialiased", SpaceGrotesk.className)}>
				{children}
			</body>
		</html>
	);
}
