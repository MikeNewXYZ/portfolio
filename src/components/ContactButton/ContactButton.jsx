import { useContext } from "react";
import { HomeTitleContext } from "@context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { Chat, ChatDots } from "@phosphor-icons/react";
import useFloatingCard from "@/hooks/useFloatingCard/useFloatingCard";
import { motion } from "framer-motion";

export default function ContactButton({ variants }) {
	const navigate = useNavigate();
	const { setHomeTitle, resetHomeTitle } = useContext(HomeTitleContext);
	const { outerRef, innerRef, updateDimensions } = useFloatingCard();

	return (
		<div className="pointer-events-none fixed left-0 top-0 z-10 flex h-dvh w-full items-end justify-end p-2 sm:p-4">
			<motion.div
				ref={outerRef}
				className="w-full sm:w-fit"
				variants={variants}
				initial="hide"
				animate="show"
				exit="hide"
				onAnimationComplete={() => updateDimensions()}
			>
				<Button
					ref={innerRef}
					className="group pointer-events-auto flex w-full items-center justify-center gap-2 bg-secondary text-2xl sm:w-fit"
					onClick={() => navigate("/contact")}
					onMouseEnter={() => setHomeTitle("contact")}
					onMouseLeave={resetHomeTitle}
					role="link"
					aria-label="go to contact page"
				>
					<Chat className="pb-0.5 text-3xl group-hover:hidden" />
					<ChatDots className="hidden pb-0.5 text-3xl group-hover:block group-hover:animate-pulse" />
					<span>contact</span>
				</Button>
			</motion.div>
		</div>
	);
}
