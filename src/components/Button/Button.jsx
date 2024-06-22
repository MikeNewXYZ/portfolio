import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(function Button({ className, children, ...props }, ref) {
	return (
		<button
			{...props}
			ref={ref}
			className={twMerge(
				"border-2 px-3 py-1.5 text-sm uppercase transition-transform duration-500 ease-in-out hover:-translate-y-1 active:scale-95",
				className,
			)}
		>
			{children}
		</button>
	);
});

export default Button;
