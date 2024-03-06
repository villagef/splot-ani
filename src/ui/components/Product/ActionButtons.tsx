import { cookies } from "next/headers";
import { Typography } from "@/ui/atoms/Typography";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { addProductToCart, getCartById, getOrCreateCart } from "@/api/cart";
import { CookieConfig, Cookies } from "@/consts";
import { ButtonAddToCart } from "@/ui/components/Product/ButtonAddToCart";
import { changeProductQuantity } from "@/app/(dynamic-pages)/koszyk/actions";

type Props = {
	productId: string;
	quantity: number;
	price: number;
};

export function ActionButtons({ productId, quantity = 0, price }: Props) {
	async function addToCartAction(_formData: FormData) {
		"use server";

		const { id: cartId } = await getOrCreateCart();
		cookies().set(Cookies.CartId, cartId, CookieConfig);

		const { order: cart } = await getCartById(cartId);

		if (cart) {
			const { orderItems } = cart;
			const orderItem = orderItems.find((item) => item.product?.id === productId) || null;

			if (orderItem) {
				if (orderItem.quantity < quantity) {
					const _quantity = orderItem.quantity + 1;
					const total = _quantity * price;
					await changeProductQuantity(cartId, orderItem.id, _quantity, total).then(() => {
						cookies().set(Cookies.ProductAddedToCartToast, "true");
					});
				}
			} else {
				await addProductToCart(cartId, productId, 1, price).then(() => {
					cookies().set(Cookies.ProductAddedToCartToast, "true");
				});
			}
		}
	}

	return (
		<Wrapper>
			{quantity && quantity <= 0 ? (
				<Typography variant="subtitle1" className="text-pretty font-bold text-primary">
					Produkt wyprzedany!
				</Typography>
			) : (
				<form action={addToCartAction}>
					<ButtonAddToCart />
				</form>
			)}
		</Wrapper>
	);
}
