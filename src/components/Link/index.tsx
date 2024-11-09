import type { ClassNameValue } from "tailwind-merge";
import { Icon } from "@iconify/react/dist/iconify.js";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
	icon?: string;
	label?: string;
	url: string;
	isExternal: boolean;
	className?: ClassNameValue;
	iconClassName?: ClassNameValue;
	labelClassName?: ClassNameValue;
};

export default function Link({
	icon,
	label,
	url,
	isExternal,
	className,
	iconClassName,
	labelClassName,
	...rest
}: Props) {
	return (
		<NextLink
			className={twMerge("flex items-center gap-1", className)}
			href={url}
			target={isExternal ? "_blank" : "_self"}
			title={label}
			aria-label={label}
			{...rest}
		>
			{icon && <Icon icon={icon} className={twMerge(iconClassName)} />}
			{label && <span className={twMerge(labelClassName)}>{label}</span>}
		</NextLink>
	);
}
