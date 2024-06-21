import { twMerge } from "tailwind-merge";

export default function Button({ className, children, ...props }) {
	return (
		<button
			{...props}
			className={twMerge("border-2 px-3 pb-1.5 pt-1 text-sm uppercase", className)}
		>
			{children}
		</button>
	);
}
