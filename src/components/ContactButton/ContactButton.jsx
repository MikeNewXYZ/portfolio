import { useContext } from "react";
import { HomeTitleContext } from "@context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { Chat, ChatDots } from "@phosphor-icons/react";

export default function ContactButton() {
	const navigate = useNavigate();
	const { setHomeTitle, resetHomeTitle } = useContext(HomeTitleContext);

	return (
		<div className="pointer-events-none fixed left-0 top-0 z-10 flex h-dvh w-full items-end justify-end p-2 sm:p-4">
			<Button
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
		</div>
	);
}
