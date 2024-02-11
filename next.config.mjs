/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "handmaderki.pl",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
