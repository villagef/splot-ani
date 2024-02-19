/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
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

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
