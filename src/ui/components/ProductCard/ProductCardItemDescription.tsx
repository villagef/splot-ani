import React from "react";

import { priceHandler } from "@/utils/priceHandler";
import { type ProductCommonFragment } from "@/gql/graphql";

type Props = {
	product: Pick<ProductCommonFragment, "name" | "price">;
};

export function ProductCardItemDescription({ product: { name, price } }: Props) {
	return (
		<div className="flex flex-col justify-between gap-2 px-2 py-2 sm:flex-row sm:items-center sm:py-4">
			<h3 role="heading" className="truncate text-sm font-medium uppercase text-primary">
				{name}
			</h3>
			<p className="text-sm font-medium text-primary-textDark" data-testid="product-price">
				<span className="sr-only">Cena:</span> {priceHandler(price)}
			</p>
		</div>
	);
}
