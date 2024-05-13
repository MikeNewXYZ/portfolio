import { XCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Button from "../button/button";
import Input from "../input/input";
import Textarea from "../textarea/textarea";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import sendContactForm from "@/lib/send-contact-form/send-contact-form";
import toast from "react-hot-toast";

export default function ContactModal() {
	const { handleSubmit, reset, control, formState } = useForm({
		defaultValues: {
			email: "",
			subject: "",
			body: "",
		},
	});

	const onSubmit = async (data) => {
		const loadingToast = toast.loading("Sending...");

		const res = await sendContactForm(data);

		toast.dismiss(loadingToast);
		if (res.success) {
			toast.success("Success! I'll get back to you soon.*");
		} else {
			toast.error(res.message.toUpperCase());
		}
	};

	// Check for errors in form
	useEffect(() => {
		const { errors, isValid, isSubmitSuccessful } = formState;

		if (isSubmitSuccessful) {
			reset({
				email: "",
				subject: "",
				body: "",
			});
			return;
		}

		if (isValid) return;
		if (Object.keys(errors).length === 0) return;

		const firstError = errors[Object.keys(errors)[0]];
		const inputName = firstError?.ref?.name;

		toast.error(`${inputName} is ${firstError?.type}`);
	}, [formState, reset]);

	return (
		<div className="m-auto flex w-[30rem] flex-col border-2">
			<div className="flex items-center justify-between border-b-2 p-2">
				<p>contact.txt</p>
				<Link className="contents text-2xl" href="/">
					<Button className="border-none p-0">
						<XCircle />
					</Button>
				</Link>
			</div>

			<form
				className="flex grow flex-col gap-2 overflow-hidden p-2"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col">
					<label htmlFor="email">Email*</label>
					<Input
						id="email"
						name="email"
						type="email"
						control={control}
						rules={{ required: true }}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="subject">Subject*</label>
					<Input
						id="subject"
						name="subject"
						type="text"
						control={control}
						rules={{ required: true }}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="body">Body*</label>
					<Textarea
						className="h-[15rem]"
						id="body"
						name="body"
						type="text"
						control={control}
						rules={{ required: true }}
					/>
				</div>

				<Button className="mt-2" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
