import { ImageResponse } from "next/og";
import { getProduct } from "@/api/products";

type Props = {
	params: {
		slug: string;
	};
};

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "splotani.pl";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image({ params }: Props) {
	const product = await getProduct({ slug: params.slug });
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{product?.images[0]?.url || "splotani.pl"}
			</div>
		),
		{
			...size,
		},
	);
}
