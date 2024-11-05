import type { Project } from "@/actions/get-projects";
import Image from "next/image";
import Link from "next/link";
import FloatingCard from "@/components/FloatingCard";

export default function ProjectCard({
	title,
	subtitle,
	technologies,
	background_image,
	main_link_buttons,
}: Project) {
	return (
		<FloatingCard
			outerClassName="relative"
			innerClassName="relative aspect-square w-full border-4 border-primary"
		>
			{/* ANCHOR Heading */}
			<div className="absolute inset-0 z-10 flex h-full w-full flex-col overflow-hidden">
				<div className="flex flex-1 flex-col p-2 [text-shadow:_0_1px_2px_black]">
					<h2 className="mt-0.5 text-2xl font-bold leading-tight">{title}</h2>
					<p className="text-pretty text-lg leading-tight">{subtitle}</p>

					<ul className="mt-1.5 flex flex-wrap gap-2 text-xs font-bold uppercase">
						{technologies.map(({ technology_tags_id: technology }, index) => (
							<li
								key={index}
								className="border-2 bg-primary px-1 py-0.5 text-secondary shadow-md [text-shadow:none]"
							>
								{technology.label}
							</li>
						))}
					</ul>
				</div>

				{/* ANCHOR Links */}
				<div className="flex w-full flex-col gap-2 p-2 drop-shadow-md">
					{main_link_buttons?.map(({ links_id: link }, index) => (
						<Link
							key={index}
							className="button bg-secondary text-center text-xl"
							href={link.url}
							target={link.is_external ? "_blank" : "_self"}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* ANCHOR Overlay */}
				<div className="absolute inset-0 -z-10 h-full w-full bg-secondary opacity-50" />
			</div>

			{/* ANCHOR Thumbnail Image */}
			<Image
				className="h-full w-full object-cover"
				src={background_image.url}
				alt={title}
				draggable={false}
				width={background_image.data.width as number}
				height={background_image.data.height as number}
			/>
		</FloatingCard>
	);
}
