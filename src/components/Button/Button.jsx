import { twMerge } from "tailwind-merge";

export default function Button({ className, children, ...props }) {
	return (
		<button
			{...props}
			className={twMerge(
				"border-2 px-3 py-1.5 text-sm uppercase transition-transform duration-500 ease-in-out hover:-translate-y-1 active:scale-95",
				className,
			)}
		>
			{children}
		</button>
	);
}
