import { ArrowFatLeft } from "@phosphor-icons/react/dist/ssr";
import CornerLink from "../CornerLink/CornerLink";

export default function BackToHomeLink() {
	return (
		<CornerLink linkPath="/" aria-label="back to home">
			<ArrowFatLeft className="text-3xl" />

			<span>back to home</span>
		</CornerLink>
	);
}
