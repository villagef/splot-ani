import { Product } from "@/ui/types";
import Image from "next/image";

type Props = {
	product: Pick<Product, "image" | "name">;
};

export function ProductCardCoverImage({ product: { image, name } }: Props) {
	return (
		<div className="aspect-square overflow-hidden">
			<Image
				width={320}
				height={320}
				src={image}
				alt={name}
				className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
				quality={40}
			/>
		</div>
	);
}
