import { Product } from "@/ui/types";
import { priceHandler } from "@/utils/priceHandler";
import React from "react";

type Props = {
	product: Pick<Product, "name" | "price">;
};

export function ProductCardItemDescription({ product: { name, price } }: Props) {
	return (
		<div className="flex items-center justify-between gap-2 px-2 py-4">
			<h3 className="text-primary truncate text-sm font-medium uppercase">{name}</h3>
			<p className="text-primary-textDark text-sm font-medium">
				<span className="sr-only">Cena:</span> {priceHandler(price)}
			</p>
		</div>
	);
}
