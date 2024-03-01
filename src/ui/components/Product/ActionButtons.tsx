import { cookies } from "next/headers";
import { Typography } from "@/ui/atoms/Typography";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { CookieConfig, Cookies } from "@/consts";
import { ButtonAddToCart } from "@/ui/components/ButtonAddToCart";

type Props = {
	productId: string;
	quantity: number | null | undefined;
};

export function ActionButtons({ productId, quantity = 0 }: Props) {
	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set(Cookies.CartId, cart.id, CookieConfig);
		await addProductToCart(cart.id, productId, 1);
	}

	return (
		<Wrapper>
			{quantity && quantity <= 0 ? (
				<Typography variant="subtitle1" className="text-pretty font-bold text-primary">
					Produkt wyprzedany!
				</Typography>
			) : (
				<>
					<form>
						<ButtonIncreaseDecrease id={productId} quantity={1} maxQuantity={quantity} />
					</form>
					<form action={addToCartAction}>
						<ButtonAddToCart />
					</form>
				</>
			)}
		</Wrapper>
	);
}
