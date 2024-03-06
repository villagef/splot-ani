import Link from "next/link";
import type { Route } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Typography } from "@/ui/atoms/Typography";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { priceHandler } from "@/utils/priceHandler";
import { getCartById } from "@/api/cart";
import { Cookies, Links } from "@/consts";
import { ButtonRemoveFromCart } from "@/ui/components/ButtonRemoveFromCart";
import { CartSummary } from "@/ui/components/Cart/CartSummary";

export default async function Cart() {
	const cartId = cookies().get(Cookies.CartId)?.value;
	if (!cartId) {
		redirect("/");
	}
	const { order: cart } = await getCartById(cartId);

	if (!cart || cart.orderItems.length === 0) {
		return (
			<Typography variant="h4" className="text-pretty py-4 text-center text-primary">
				Brak produktów w koszyku
			</Typography>
		);
	}

	return (
		<>
			<Typography variant="h2" className="text-pretty pt-2 text-center text-primary">
				Koszyk
			</Typography>
			<div className="grid w-full gap-10 py-4 text-secondary-textDark md:py-8 lg:grid-cols-5">
				<div className="grid gap-4 lg:col-span-3">
					{cart.orderItems?.map((item, index) => {
						const { id, product, quantity } = item;
						return (
							product && (
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
												<Typography
													variant="subtitle2"
													className="text-pretty text-xs sm:text-base"
												>
													{priceHandler(product.price)}
												</Typography>
											</div>
											{product.quantity && quantity > product.quantity && (
												<Typography
													variant="caption"
													className="text-pretty font-bold text-primary"
												>
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
							)
						);
					})}
				</div>
				<div className="lg:col-span-2 lg:col-start-4">
					<CartSummary cartId={cartId} />
				</div>
			</div>
		</>
	);
}
