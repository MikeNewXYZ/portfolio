import { cn } from "@/lib/cn/cn";
import { motion } from "framer-motion";
import { useController } from "react-hook-form";

const inputVariant = {
	show: {
		scale: 1,
	},
	focus: {
		scale: 1.01,
	},
};

export default function Textarea({ className, ...props }) {
	const { field } = useController({ ...props });

	return (
		<motion.textarea
			{...field}
			id={props.id}
			name={props.name}
			type={props.type}
			className={cn(
				"resize-none border-2 bg-dark p-1 text-light focus:outline-none",
				className,
			)}
			variants={inputVariant}
			initial="show"
			whileFocus="focus"
		/>
	);
}
