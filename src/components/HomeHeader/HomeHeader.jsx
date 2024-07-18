import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useFloatingCard from "@/hooks/useFloatingCard/useFloatingCard";
import Button from "../Button/Button";

export default function HomeHeader({
	topText = "",
	title = "",
	defaultTitle = "",
	setHeaderTitle = () => {},
	subText = "",
	navigationLinks = [],
}) {
	const { outerRef, innerRef } = useFloatingCard();

	// Prevents title text from disapearing when title prop changes too quickly.
	const titleKey = `${title}-${Math.random()}`;

	return (
		<div ref={outerRef}>
			<div ref={innerRef}>
				<div className="text-center">
					<h2 className="text-3xl font-black uppercase sm:text-4xl">{topText}</h2>

					<AnimatePresence mode="wait" initial={false}>
						<motion.h1
							key={titleKey}
							className="text-6xl font-black uppercase sm:text-8xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							{title}
						</motion.h1>
					</AnimatePresence>

					<p className="mt-2 text-sm normal-case sm:text-base">{subText}</p>
				</div>

				<nav className="mt-4 flex justify-center gap-4" aria-label="navigation links">
					{navigationLinks.map(({ link_text, link_path }, index) => (
						<Link
							key={index}
							href={link_path}
							onMouseEnter={() => setHeaderTitle(link_text)}
							onMouseLeave={() => setHeaderTitle(defaultTitle)}
							aria-label={`view ${link_text}`}
						>
							<Button className="px-2 py-1 sm:text-base">{link_text}</Button>
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
