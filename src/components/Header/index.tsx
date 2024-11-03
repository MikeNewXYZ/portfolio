import Link from "next/link";
import MobileMenu from "./MobileMenu";

type Props = {
	fakeHeader?: boolean;
};

const menuItems = [
	{ label: "resume", url: "/resume" },
	{ label: "contact", url: "/contact" },
];

export default function Header({ fakeHeader = false }: Props) {
	return (
		<>
			{/* ANCHOR Header */}
			<header className="absolute left-0 top-0 z-20 h-16 w-full items-center p-4">
				<div className="container mx-auto flex justify-between">
					{/* ANCHOR Brand Link */}
					<Link href="/" aria-label="home page">
						MikeNew.XYZ
					</Link>

					{/* ANCHOR Desktop Menu */}
					<nav className="hidden gap-2 sm:flex">
						{menuItems.map(({ label, url }, index) => (
							<Link
								key={index}
								href={url}
								className="button flex items-center px-1 py-0.5"
								aria-label="resume page"
							>
								{label}
							</Link>
						))}
					</nav>

					<MobileMenu menuItems={menuItems} />
				</div>
			</header>

			{/* Fake Header */}
			{fakeHeader && <div className="h-16 w-full" />}
		</>
	);
}

// const Header = ({ fakeHeader }) => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [isMenuButtonFloating, setIsMenuButtonFloating] = useState(false);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setIsMenuButtonFloating(window.scrollY > 0);
// 		};
// 		window.addEventListener("scroll", handleScroll);
// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// };

// export default Header;
