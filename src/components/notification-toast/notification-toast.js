import { Toaster } from "react-hot-toast";
import twConfig from "@/lib/tw-config/tw-config";
import {
	Spinner,
	WarningCircle,
	CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

const { theme } = twConfig;

export default function NotificationToast() {
	return (
		<Toaster
			position="bottom-center"
			toastOptions={{
				style: {
					border: `${theme.borderWidth[2]} solid ${theme.borderColor.light}`,
					borderRadius: "0px",
					background: theme.backgroundColor.dark,
					color: theme.textColor.light,
					fontSize: theme.fontSize.lg,
					textTransform: "uppercase",
				},
				loading: {
					icon: <Spinner className="animate-spin text-2xl" />,
				},
				success: {
					icon: <CheckCircle className="text-2xl" />,
				},
				error: {
					icon: <WarningCircle className="text-2xl" />,
				},
			}}
		/>
	);
}
