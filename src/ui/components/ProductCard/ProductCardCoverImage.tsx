import Image from "next/image";
import { type Product } from "@/ui/types";

type Props = {
	product: Pick<Product, "images" | "name">;
};

export function ProductCardCoverImage({ product: { images, name } }: Props) {
	return (
		<div className="aspect-square overflow-hidden rounded-t-md">
			<Image
				width={320}
				height={320}
				src={images[0].url}
				alt={name}
				className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
				quality={40}
			/>
		</div>
	);
}
