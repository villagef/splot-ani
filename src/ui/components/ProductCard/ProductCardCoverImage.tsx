import Image from "next/image";
import type { ProductDetailsFragment } from "@/gql/graphql";

type Props = {
	product: Omit<ProductDetailsFragment, "description">;
};

export function ProductCardCoverImage({ product: { images, name } }: Props) {
	return (
		<div className="aspect-square overflow-hidden rounded-t-md">
			<Image
				width={320}
				height={320}
				src={images[0] ? images[0]?.url : "/makrama-1.png"}
				alt={name}
				className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
				quality={30}
			/>
		</div>
	);
}
