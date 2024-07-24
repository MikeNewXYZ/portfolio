import { motion } from "framer-motion";
import Link from "next/link";
import useFloatingCard from "@/hooks/useFloatingCard/useFloatingCard";
import Button from "../Button/Button";
import HeaderTitle from "./HeaderTItle/HeaderTitle";

const headerAnimation = {
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

export default function HomeHeader({
	topText = "",
	title = "",
	setHeaderTitle = () => {},
	resetHeaderTitle = () => {},
	subText = "",
	navigationLinks = [],
}) {
	const { outerRef, innerRef } = useFloatingCard();

	return (
		<motion.div ref={outerRef} variants={headerAnimation} initial="hide" animate="show" exit="hide">
			<div ref={innerRef}>
				<div className="text-center">
					<h2 className="text-3xl font-black uppercase sm:text-4xl">{topText}</h2>

					<HeaderTitle title={title} />

					<p className="mx-auto mt-1 max-w-80 text-balance text-sm normal-case sm:text-base">
						{subText}
					</p>
				</div>

				<nav className="mt-6 flex justify-center gap-4" aria-label="navigation links">
					{navigationLinks.map(({ link_text, link_path }, index) => (
						<Link
							key={index}
							href={link_path}
							onMouseEnter={() => setHeaderTitle(link_text)}
							onMouseLeave={resetHeaderTitle}
							aria-label={`view ${link_text}`}
						>
							<Button className="px-2 py-1 sm:text-base">{link_text}</Button>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
}
