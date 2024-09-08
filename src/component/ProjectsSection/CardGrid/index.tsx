import { type Projects } from "../../../lib/getProjects/type";
import FloatingCard from "../../FloatingCard";

type Props = {
	projects: Projects;
};

function CardGrid({ projects }: Props) {
	return (
		<div className="mt-20 grid w-full grid-cols-1 justify-center gap-8 sm:gap-16 md:grid-cols-2 xl:grid-cols-3">
			{projects.map(({ id, data }, index) => (
				<FloatingCard
					key={index}
					innerClassName="w-full aspect-square border-4 border-primary relative"
					rotateMultiplier={5}
					onHoverScaleSize={1.03}
				>
					<div className="absolute inset-0 z-10 flex h-full w-full flex-col transition-opacity duration-500 md:opacity-0 hover:md:opacity-100">
						{/* HEADING TEXT */}
						<div className="flex flex-1 flex-col p-2">
							{/* HEADING TITLE */}
							<h2 className="mt-0.5 text-lg leading-tight">{id}</h2>
							<p className="text-pretty text-sm leading-tight">{data.subtitle}</p>

							{/* HEADING TECHNOLOGY TAGS */}
							<ul className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-xs uppercase opacity-70">
								{data.technologies.map((technology, index) => (
									<li key={index}>{technology}</li>
								))}
							</ul>
						</div>

						{/* LINKS */}
						<div className="flex w-full flex-col gap-2 p-2">
							{/* REPO LINK */}
							{data.links.repo.discriminant && (
								<a
									className="button bg-secondary text-center text-xl"
									href={data.links.repo.value.url}
									target="_blank"
								>
									{data.links.repo.value.label}
								</a>
							)}

							{/* VIEW LINK */}
							{data.links.view.discriminant && (
								<a
									className="button bg-secondary text-center text-xl"
									href={data.links.view.value.url}
									target="_blank"
								>
									{data.links.view.value.label}
								</a>
							)}
						</div>

						{/* OVERLAY */}
						<div className="absolute inset-0 -z-10 h-full w-full bg-secondary opacity-70"></div>
					</div>

					{/* THUMBNAIL IMAGE */}
					<img
						className="h-full w-full object-cover"
						src={data.thumbnailImageData.src}
						width={data.thumbnailImageData.attributes.width}
						height={data.thumbnailImageData.attributes.height}
						loading={data.thumbnailImageData.attributes.loading}
						alt={id}
						draggable={false}
					/>
				</FloatingCard>
			))}
		</div>
	);
}

export default CardGrid;
