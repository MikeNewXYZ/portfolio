import "./globals.css";
import Background from "@/components/background/background";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-dark text-light relative">
				{children}
				<Background />
			</body>
		</html>
	);
}
