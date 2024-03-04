import Link from "next/link";
import type { Route } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Button } from "@/ui/atoms/Button";
import { Separator } from "@/ui/atoms/Separator";
import { Typography } from "@/ui/atoms/Typography";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { priceHandler } from "@/utils/priceHandler";
import { getCartById } from "@/api/cart";
import { Cookies } from "@/consts";
import { ButtonRemoveFromCart } from "@/ui/components/ButtonRemoveFromCart";

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
								<BoxShadow key={index} className="flex h-fit flex-row gap-4">
									<Link href={`/produkt/${product.slug}?imgIdx=0` as Route}>
										<SmallImage idx={index} image={product.images[0]?.url || ""} selected={false} />
									</Link>
									<div className="flex w-full justify-between">
										<div className="flex flex-col justify-between gap-2 sm:gap-4">
											<div>
												<Link href={`/produkt/${product.slug}?imgIdx=0` as Route}>
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
											<form>
												<ButtonIncreaseDecrease
													cartId={cartId}
													productId={id}
													quantity={quantity || 0}
													maxQuantity={product.quantity}
												/>
											</form>
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
					<BoxShadow className="grid gap-2">
						<Typography variant="h3">Podsumowanie zamówienia</Typography>
						<Separator fullWidth />
						<div className="flex justify-between">
							<Typography variant="h6">Produkty</Typography>
							<Typography variant="h6">122</Typography>
						</div>
						<div className="flex justify-between">
							<Typography variant="h6">Dostawa</Typography>
							<Typography variant="h6">{priceHandler(1600)}</Typography>
						</div>
						<Separator fullWidth />
						<div className="flex justify-between">
							<Typography variant="h4">Suma</Typography>
							<Typography variant="h4">{priceHandler(43000)}</Typography>
						</div>
						<Typography variant="caption" className="text-end">
							Including VAT
						</Typography>
						<Button variant="primary" color="primary" className="w-full shadow-md shadow-primary">
							Zamów
						</Button>
					</BoxShadow>
				</div>
			</div>
		</>
	);
}
