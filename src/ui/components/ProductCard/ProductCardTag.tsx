import { Product } from "@/ui/types";
import React from "react";

type Props = {
	product: Pick<Product, "tag">;
};

export function ProductCardTag({ product: { tag } }: Props) {
	return (
		tag && (
			<div className="bg-primary text-primary-textLight absolute right-0 top-0 z-10 rounded-bl-md bg-opacity-60 px-2 py-1 text-sm lowercase">
				{tag}
			</div>
		)
	);
}
