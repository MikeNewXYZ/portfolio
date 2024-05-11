"use client";
import { Chats } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../button/button";
import { useMainTextContext } from "@/context/main-text-context/main-text-context";

const MotionLink = motion(Link);

const LinkVariant = {
	hide: {
		opacity: 0,
		y: "100%",
	},
	show: {
		opacity: 1,
		y: "0%",
		transition: {
			delay: 0.5,
		},
	},
};

export default function ContactButton({ href }) {
	const { originalMainText, setMainText } = useMainTextContext();

	return (
		<div className="pointer-events-none fixed left-0 top-0 z-50 flex h-full w-full items-end justify-end p-4">
			<MotionLink
				className="pointer-events-auto w-full sm:w-fit"
				href={href}
				variants={LinkVariant}
				initial="hide"
				animate="show"
				onMouseEnter={() => setMainText("contact")}
				onMouseLeave={() => setMainText(originalMainText)}
			>
				<Button className="flex w-full items-center justify-center gap-2 p-1 sm:p-2">
					<Chats className="text-xl sm:text-3xl" weight="regular" />
					<p className="mb-0.5 text-lg uppercase sm:text-2xl">contact</p>
				</Button>
			</MotionLink>
		</div>
	);
}
