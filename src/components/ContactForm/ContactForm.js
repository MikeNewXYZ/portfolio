import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Form from "../Form/Form";
import useFloatingCard from "@/hooks/useFloatingCard/useFloatingCard";

const formAnimation = {
	hide: {
		opacity: 0,
		y: "10%",
	},
	show: {
		opacity: 1,
		y: "0%",
	},
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm();
	const { outerRef, innerRef, updateDimensions } = useFloatingCard({ multiplier: 3 });

	const onSubmit = async (data) => {
		try {
			const response = await fetch("/api/sendContactFormData", {
				method: "POST",
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error(await response.text());

			reset();
			toast("Contact form sent!");
		} catch (error) {
			toast(error.message);
		}
	};

	return (
		<motion.div
			ref={outerRef}
			className="w-full sm:w-96"
			variants={formAnimation}
			initial="hide"
			animate="show"
			exit="hide"
			onAnimationComplete={updateDimensions}
		>
			<form
				ref={innerRef}
				className="border-4 border-primary p-2"
				onSubmit={handleSubmit(onSubmit)}
				aria-label="contact form"
			>
				<h1 className="mb-3 border-b-2 border-primary pb-1 uppercase">contact</h1>

				<div className="flex flex-col gap-2">
					<Form.Control>
						<Form.Title>Email</Form.Title>
						<Form.Input type="email" {...register("email", { required: true })} />
					</Form.Control>

					<Form.Control>
						<Form.Title>Subject</Form.Title>
						<Form.Input type="text" {...register("subject", { required: true })} />
					</Form.Control>

					<Form.Control>
						<Form.Title>Body</Form.Title>
						<Form.TextArea {...register("body", { required: true })} />
					</Form.Control>

					<Button className="mt-3 text-2xl" type="submit" disabled={!isValid}>
						Submit
					</Button>
				</div>
			</form>
		</motion.div>
	);
}
