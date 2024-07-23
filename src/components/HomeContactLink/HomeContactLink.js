import { Chat, ChatDots } from "@phosphor-icons/react/dist/ssr";
import CornerLink from "../CornerLink/CornerLink";

export default function HomeContactLink({
	linkText = "",
	linkPath = "",
	setHeaderTitle = () => {},
	resetHeaderTitle = () => {},
}) {
	return (
		<CornerLink
			linkClassName="group"
			linkPath={linkPath}
			onMouseEnter={() => setHeaderTitle(linkText)}
			onMouseLeave={resetHeaderTitle}
			aria-label={`go to ${linkPath}`}
		>
			<Chat className="pb-0.5 text-3xl group-hover:hidden" />
			<ChatDots className="hidden pb-0.5 text-3xl group-hover:block group-hover:animate-pulse" />

			<span>{linkText}</span>
		</CornerLink>
	);
}
