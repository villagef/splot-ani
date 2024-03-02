import { ImageResponse } from "next/og";
import { getProduct } from "@/api/products";

type Props = {
	params: {
		slug: string;
	};
};

export const runtime = "edge";
export const alt = "splotani.pl";
export const contentType = "image/jpg";
export const size = {
	width: 800,
	height: 400,
};

export default async function Image({ params }: Props) {
	const product = await getProduct({ slug: params.slug });
	return new ImageResponse(
		(
			<div tw="flex flex-row w-full h-full bg-[#fffafa] text-[#222e59]">
				<div tw="flex w-1/2 overflow-hidden">
					<img
						src={product?.images[0]?.url || ""}
						alt={`Zdjęcie produktu - ${product?.name}`}
						tw="h-full w-full object-cover object-center"
					/>
					<div tw="flex absolute bg-black/15 w-full h-full"></div>
				</div>
				<div tw="flex flex-col h-full w-1/2 items-center justify-center text-center">
					<p tw="uppercase">splotani.pl</p>
					<h1 tw="text-[#a36871]">{product?.name || ""}</h1>
					<div tw="rounded-3xl bg-[#222e59]/90 text-white font-bold py-3 px-5">
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
