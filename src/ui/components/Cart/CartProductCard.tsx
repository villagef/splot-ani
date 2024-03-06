import { type Route } from "next";
import Link from "next/link";
import React from "react";
import { Links } from "@/consts";
import { type ProductDetailsFragment } from "@/gql/graphql";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Typography } from "@/ui/atoms/Typography";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";
import { ButtonRemoveFromCart } from "@/ui/components/ButtonRemoveFromCart";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { priceHandler } from "@/utils/priceHandler";

type Props = {
	id: string;
	index: number;
	product: Pick<ProductDetailsFragment, "name" | "slug" | "price" | "images" | "quantity">;
	quantity: number;
	cartId: string;
};

export function CartProductCard({ id, index, product, quantity, cartId }: Props) {
	return (
		<BoxShadow key={id} className="flex h-fit flex-row gap-4">
			<Link href={`${Links.Product}/${product.slug}?imgIdx=0` as Route}>
				<SmallImage idx={index} image={product.images[0]?.url || ""} selected={false} />
			</Link>
			<div className="flex w-full justify-between">
				<div className="flex flex-col justify-between gap-2 ">
					<div>
						<Link href={`${Links.Product}/${product.slug}?imgIdx=0` as Route}>
							<Typography
								variant="h6"
								className="text-pretty text-xs hover:text-primary sm:text-base"
							>
								{product.name}
							</Typography>
						</Link>
						<Typography variant="subtitle2" className="text-pretty text-xs sm:text-base">
							{priceHandler(product.price)}
						</Typography>
					</div>
					{product.quantity && quantity > product.quantity && (
						<Typography variant="caption" className="text-pretty font-bold text-primary">
							Tylko {product.quantity} szt. w magazynie
						</Typography>
					)}
					<ButtonIncreaseDecrease
						cartId={cartId}
						productId={id}
						quantity={quantity || 0}
						maxQuantity={product.quantity}
						price={product.price || 0}
					/>
				</div>
				<div>
					<ButtonRemoveFromCart productId={id} />
				</div>
			</div>
		</BoxShadow>
	);
}
