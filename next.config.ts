import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dashboard.mikenew.xyz",
				port: "",
				pathname: "/assets/**",
			},
		],
	},
};

export default nextConfig;
