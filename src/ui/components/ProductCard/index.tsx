import React from "react";
import Link from "next/link";
import { ProductCardTag } from "@/ui/components/ProductCard/ProductCardTag";
import { ProductCardCoverImage } from "@/ui/components/ProductCard/ProductCardCoverImage";
import { ProductCardItemDescription } from "@/ui/components/ProductCard/ProductCardItemDescription";
import { type Product } from "@/ui/types";
import { Links } from "@/consts";

type Props = {
	product: Product;
};

export function ProductCard({ product }: Props) {
	return (
		<li>
			<Link href={`${Links.Products}/${product.id}`}>
				<article className="relative rounded-md bg-primary-background shadow-md">
					<ProductCardTag product={product} />
					<ProductCardCoverImage product={product} />
					<ProductCardItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
}
