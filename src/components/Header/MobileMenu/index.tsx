"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
	menuItems: {
		label: string;
		url: string;
	}[];
};

export default function MobileMenu({ menuItems }: Props) {
	const menuButtonStaticRef = useRef<HTMLButtonElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isMenuButtonFloating, setIsMenuButtonFloating] = useState<boolean>(false);

	const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		if (!menuButtonStaticRef.current) return;
		const menuButtonStatic = menuButtonStaticRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setIsMenuButtonFloating(!entry.isIntersecting);
			},
			{ root: null, rootMargin: "0px", threshold: 1 },
		);
		observer.observe(menuButtonStatic);

		return () => observer.unobserve(menuButtonStatic);
	}, [menuButtonStaticRef]);

	return (
		<>
			{/* ANCHOR Menu Button Static */}
			<button
				ref={menuButtonStaticRef}
				className="button flex items-center gap-1 px-1 py-0.5 sm:hidden"
				onClick={handleToggleMenu}
			>
				<Icon className="text-lg" icon="ph:list" />
				<span className="text-primary">menu</span>
			</button>

			{/* ANCHOR Menu Button Floating */}
			{isMenuButtonFloating && (
				<button
					className="button fixed bottom-2 right-2 z-10 flex items-center gap-1 bg-secondary px-1 py-0.5 shadow-md sm:hidden"
					onClick={handleToggleMenu}
				>
					<Icon className="text-lg" icon="ph:list" />
					<span className="text-primary">menu</span>
				</button>
			)}

			{/* ANCHOR Menu Drawer */}
			{isMenuOpen && (
				<aside className="fixed inset-0 z-30 h-dvh w-full">
					{/* ANCHOR Drawer Menu */}
					<nav className="absolute bottom-0 left-0 z-10 w-full translate-y-0 transform border-t-2 border-t-primary bg-secondary text-primary">
						<ul className="flex flex-col text-lg uppercase">
							{menuItems.map(({ url, label }, index) => (
								<li key={index}>
									<a href={url} className="flex w-full items-center gap-1 p-2">
										<Icon className="text-lg" icon="ph:caret-right" />
										<span>{label}</span>
									</a>
								</li>
							))}
						</ul>

						<div className="mb-2 mt-4 flex justify-center">
							<Link href="/" className="text-center" aria-label="home page">
								MikeNew.XYZ
							</Link>
						</div>
					</nav>

					{/* ANCHOR Drawer Overlay */}
					<div
						role="button"
						title="close menu"
						className="absolute z-0 h-full w-full cursor-pointer bg-secondary opacity-70"
						onClick={handleToggleMenu}
					></div>
				</aside>
			)}
		</>
	);
}
