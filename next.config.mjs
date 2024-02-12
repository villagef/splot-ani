/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.handmaderki.pl",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.etsystatic.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
