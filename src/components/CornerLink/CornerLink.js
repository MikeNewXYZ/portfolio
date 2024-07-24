import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import Button from "../Button/Button";

export default function CornerLink({
	linkPath = "",
	rightSide = true,
	overlayClassName,
	linkClassName,
	children,
	...props
}) {
	const router = useRouter();

	return (
		<div
			className={twMerge(
				"pointer-events-none fixed left-0 top-0 z-50 flex h-dvh w-full items-end p-2 sm:p-4",
				overlayClassName,
				rightSide ? "justify-end" : "justify-start",
			)}
		>
			<Button
				{...props}
				className={twMerge(
					"pointer-events-auto flex w-full items-center justify-center gap-2 bg-secondary text-2xl sm:w-fit",
					linkClassName,
				)}
				onClick={() => router.push(linkPath)}
			>
				{children}
			</Button>
		</div>
	);
}
