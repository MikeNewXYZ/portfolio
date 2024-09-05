import { useEffect, useState } from "react";
import { CaretRight, List } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

function MobileNavigation() {
	const [isMenuButtonFloating, setIsMenuButtonFloating] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		determineIsMenuButtonFloating();
		addEventListener("scroll", determineIsMenuButtonFloating);
		return () => removeEventListener("scroll", determineIsMenuButtonFloating);
	}, []);

	function determineIsMenuButtonFloating() {
		const halfHeight = window.innerHeight / 2;
		const scrollAmount = window.scrollY;

		if (scrollAmount >= halfHeight && !isMenuButtonFloating) {
			setIsMenuButtonFloating(true);
		} else {
			setIsMenuButtonFloating(false);
		}
	}

	return (
		<>
			{/* REGULAR MENU */}
			<button
				className={twMerge(
					"button p-0 text-2xl sm:hidden",
					isMenuButtonFloating ? "hidden" : "block",
				)}
				aria-label="Menu"
				onClick={openMenu}
			>
				<List />
			</button>

			{/* FLOATING MENU */}
			<button
				className={twMerge(
					"button fixed bottom-2 right-2 z-10 bg-secondary p-0 text-4xl transition-all duration-500 sm:hidden",
					isMenuButtonFloating
						? "translate-y-0 opacity-100"
						: "pointer-events-none translate-y-full opacity-0",
				)}
				aria-label="Menu"
				onClick={openMenu}
			>
				<List weight="light" />
			</button>

			{/* MENU DRAWER */}
			<aside
				className={twMerge(
					"fixed inset-0 z-30 h-dvh w-full transition-opacity duration-500",
					isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
				)}
			>
				<nav
					className={twMerge(
						"absolute bottom-0 left-0 z-10 w-full border-t-2 border-t-primary bg-secondary text-primary transition-transform duration-500",
						isMenuOpen ? "translate-x-0" : "translate-y-full",
					)}
				>
					<ul className="flex flex-col text-lg uppercase">
						<li>
							<a href="/resume" className="flex w-full items-center gap-1 p-2">
								<CaretRight />
								<span>resume</span>
							</a>
						</li>
						<li>
							<a href="/contact" className="flex w-full items-center gap-1 p-2">
								<CaretRight />
								<span>contact</span>
							</a>
						</li>
					</ul>
				</nav>

				<div
					role="button"
					className="absolute z-0 h-full w-full cursor-pointer bg-secondary opacity-70"
					onClick={closeMenu}
				></div>
			</aside>
		</>
	);
}

export default MobileNavigation;
