import { cookies } from "next/headers";
import { Typography } from "@/ui/atoms/Typography";
import { getCartById } from "@/api/cart";
import { Cookies } from "@/consts";
import { CartSummary } from "@/ui/components/Cart/CartSummary";
import { CartProductCard } from "@/ui/components/Cart/CartProductCard";

export default async function Cart() {
	const cartId = cookies().get(Cookies.CartId)?.value;

	if (!cartId) {
		return (
			<Typography variant="h4" className="text-pretty py-4 text-center text-primary">
				Brak produktów w koszyku
			</Typography>
		);
	}

	const { order: cart } = await getCartById(cartId);

	if (cart?.orderItems?.length === 0) {
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
					{cart?.orderItems?.map((item, index) => {
						const { id, product, quantity } = item;
						return (
							product && (
								<CartProductCard
									key={id}
									id={id}
									index={index}
									product={product}
									quantity={quantity}
									cartId={cartId}
								/>
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
