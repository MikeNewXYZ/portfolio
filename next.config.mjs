/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/assets/:id",
				destination: "https://portfolio-cms.mikenew.xyz/assets/:id",
			},
		];
	},
};

export default nextConfig;
