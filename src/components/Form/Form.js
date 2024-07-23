import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Control = forwardRef(function Control({ className, children, ...props }, ref) {
	return (
		<label {...props} ref={ref} className={twMerge("flex flex-col", className)}>
			{children}
		</label>
	);
});

const Title = forwardRef(function Title({ className, children, ...props }, ref) {
	return (
		<span {...props} ref={ref} className={twMerge("mb-0.5", className)}>
			{children}
		</span>
	);
});

const Input = forwardRef(function Input({ className, ...props }, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className={twMerge(
				"border-2 border-primary bg-transparent p-1 transition-transform duration-500 focus:-translate-y-0.5 focus:outline-none",
				className,
			)}
		/>
	);
});

const TextArea = forwardRef(function Input({ className, ...props }, ref) {
	return (
		<textarea
			{...props}
			ref={ref}
			className={twMerge(
				"h-48 resize-none border-2 border-primary bg-transparent p-1 transition-transform duration-500 focus:-translate-y-0.5 focus:outline-none",
				className,
			)}
		/>
	);
});

const Form = {
	Control,
	Title,
	Input,
	TextArea,
};

export default Form;
