import { ProductCardTag } from "@/ui/components/ProductCard/ProductCardTag";
import { ProductCardCoverImage } from "@/ui/components/ProductCard/ProductCardCoverImage";
import { ProductCardItemDescription } from "@/ui/components/ProductCard/ProductCardItemDescription";
import { Product } from "@/ui/types";
import React from "react";

type Props = {
	product: Product;
};

export function ProductCard({ product }: Props) {
	return (
		<li>
			<article className=" relative rounded-sm bg-white shadow-md">
				<ProductCardTag product={product} />
				<ProductCardCoverImage product={product} />
				<ProductCardItemDescription product={product} />
			</article>
		</li>
	);
}
