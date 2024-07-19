import { Chat, ChatDots } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../Button/Button";

const MotionLink = motion(Link);

export default function HomeContactLink({
	linkText = "",
	linkPath = "",
	setHeaderTitle = () => {},
	resetHeaderTitle = () => {},
}) {
	return (
		<div className="pointer-events-none fixed left-0 top-0 z-10 flex h-dvh w-full items-end justify-end p-2 sm:p-4">
			<MotionLink className="w-full sm:w-fit" href={linkPath} aria-label={`view ${linkText}`}>
				<Button
					className="group pointer-events-auto flex w-full items-center justify-center gap-2 bg-secondary text-2xl sm:w-fit"
					onMouseEnter={() => setHeaderTitle(linkText)}
					onMouseLeave={resetHeaderTitle}
				>
					<Chat className="pb-0.5 text-3xl group-hover:hidden" />
					<ChatDots className="hidden pb-0.5 text-3xl group-hover:block group-hover:animate-pulse" />

					<span>{linkText}</span>
				</Button>
			</MotionLink>
		</div>
	);
}
