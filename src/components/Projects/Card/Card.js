import Button from "@/components/Button/Button";
import useFloatingCard from "@/hooks/useFloatingCard/useFloatingCard";
import Image from "next/image";
import Link from "next/link";

export default function Card({
	title = "",
	thumbnail = "",
	description = "",
	technologies = [],
	appUrl = "",
	repoUrl = "",
}) {
	const { outerRef, innerRef } = useFloatingCard({ multiplier: 3 });

	return (
		<div ref={outerRef} className="aspect-square w-full">
			<div
				ref={innerRef}
				className="relative h-full w-full overflow-hidden border-4 border-primary"
			>
				<div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-start justify-end p-4">
					<div className="flex w-full gap-1">
						<h1 className="flex-1 text-pretty font-bold uppercase">{title}</h1>

						<nav className="flex h-fit gap-1">
							{appUrl && (
								<Button className="px-1 py-0.5 text-xs">
									<Link href={appUrl} target="_blank">
										app
									</Link>
								</Button>
							)}

							{repoUrl && (
								<Button className="px-1 py-0.5 text-xs">
									<Link href={repoUrl} target="_blank">
										repo
									</Link>
								</Button>
							)}
						</nav>
					</div>

					<p className="mt-1 w-full text-pretty text-xs">{description}</p>

					<ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs uppercase opacity-80">
						{technologies.map((technology, index) => (
							<li key={index}>{technology}</li>
						))}
					</ul>
				</div>

				<div className="absolute left-0 top-0 z-10 h-full w-full bg-secondary opacity-70"></div>

				<div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
					<Image
						className="h-full w-full object-cover"
						src={`https://portfolio-cms.mikenew.xyz/assets/${thumbnail}`}
						alt={description}
						sizes="100%"
						fill
						priority
					/>
				</div>
			</div>
		</div>
	);
}
