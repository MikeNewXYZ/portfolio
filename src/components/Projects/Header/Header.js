export default function Header({ title = "", subtitle = "" }) {
	return (
		<div className="mt-10 w-full max-w-[30rem] text-center sm:mt-12">
			<h1 className="text-5xl font-bold uppercase sm:text-7xl">{title}</h1>

			<p className="mt-1 text-pretty text-xs opacity-90">{subtitle}</p>
		</div>
	);
}
