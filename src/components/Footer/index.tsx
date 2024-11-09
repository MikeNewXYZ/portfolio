import getFooter from "@/actions/get-footer";
import Link from "@/components/Link";

export default async function Footer() {
	const { creditLink, socialLinks } = await getFooter();

	return (
		<footer className="px-4 py-2 sm:py-4">
			<div className="container mx-auto flex h-full flex-col-reverse items-center justify-center gap-2 sm:flex-row sm:items-end sm:justify-between">
				{/* ANCHOR Credit Link */}
				<Link
					className="text-center text-sm uppercase sm:text-left"
					icon={creditLink.icon}
					label={creditLink.label}
					url={creditLink.url}
					isExternal={creditLink.isExternal}
				/>

				{/* ANCHOR Social Links */}
				<ul className="flex gap-2">
					{socialLinks.map(({ icon, url, isExternal }, index) => (
						<li key={index} className="aspect-square h-full">
							<Link
								className="button border-0 p-0.5 text-xl"
								icon={icon}
								url={url}
								isExternal={isExternal}
							/>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
