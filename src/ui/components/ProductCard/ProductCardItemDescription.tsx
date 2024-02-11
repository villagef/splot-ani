import React from "react";
import { type Product } from "@/ui/types";

import { priceHandler } from "@/utils/priceHandler";


type Props = {
	product: Pick<Product, "name" | "price">;
};

export function ProductCardItemDescription({ product: { name, price } }: Props) {
	return (
		<div className="flex items-center justify-between gap-2 px-2 py-4">
			<h3 className="truncate text-sm font-medium uppercase text-primary">{name}</h3>
			<p className="text-sm font-medium text-primary-textDark">
				<span className="sr-only">Cena:</span> {priceHandler(price)}
			</p>
		</div>
	);
}