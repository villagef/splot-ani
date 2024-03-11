/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	output: "standalone",
	experimental: {
		typedRoutes: true,
	},
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
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/produkty",
				destination: "/produkty/wszystkie/1",
				// TODO: Change to true after adding all products
				permanent: false,
			},
			{
				source: "/produkty/:category",
				destination: "/produkty/:category/1",
				// TODO: Change to true after adding all products
				permanent: false,
			},
			{
				source: "/produkt",
				destination: "/produkty/wszystkie/1",
				// TODO: Change to true after adding all products
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
