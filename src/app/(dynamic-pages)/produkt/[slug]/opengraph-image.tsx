import { ImageResponse } from "next/og";
import { getProduct } from "@/api/products";

type Props = {
	params: {
		slug: string;
	};
};

export const runtime = "nodejes";
export const alt = "splotani.pl";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/jpg";

export default async function Image({ params }: Props) {
	const product = await getProduct({ slug: params.slug });
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					height: "100%",
					backgroundColor: "#fffafa",
					color: "#222e59",
				}}
			>
				<div style={{ display: "flex", width: "50%", overflow: "hidden", position: "relative" }}>
					<img /* eslint-disable-line */
						src={product?.images[0]?.url || ""}
						alt={`Zdjęcie produktu - ${product?.name}`}
						style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }}
					/>
					<div
						style={{
							position: "absolute",
							backgroundColor: "rgba(0,0,0,0.15)",
							width: "100%",
							height: "100%",
						}}
					></div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						width: "50%",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					<p style={{ textTransform: "uppercase" }}>splotani.pl</p>
					<h1 style={{ color: "#a36871" }}>{product?.name || ""}</h1>
					<div
						style={{
							borderRadius: "1.5rem",
							backgroundColor: "rgba(34,46,89,0.9)",
							color: "white",
							fontWeight: "bold",
							padding: "0.75rem 1.25rem",
						}}
					>
						Kliknij po więcej
					</div>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
