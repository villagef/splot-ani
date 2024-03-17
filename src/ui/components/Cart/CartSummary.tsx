import { getCartById } from "@/api/cart";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Separator } from "@/ui/atoms/Separator";
import { Typography } from "@/ui/atoms/Typography";
import ButtonOrder from "@/ui/components/Cart/ButtonOrder";
import { priceHandler } from "@/utils/priceHandler";

type Props = {
	cartId: string;
};

export async function CartSummary({ cartId }: Props) {
	const { order: cart } = await getCartById(cartId);

	const shippingPrice = 1600;
	const subtotal =
		cart?.orderItems?.reduce((accumulator, product) => {
			return accumulator + product.total;
		}, 0) || 0;

	const totalPrice = subtotal + shippingPrice;

	return (
		<BoxShadow className="grid gap-2">
			<Typography variant="h3">Podsumowanie zamówienia</Typography>
			<Separator fullWidth />
			<div className="flex justify-between">
				<Typography variant="h6">Produkty</Typography>
				<Typography variant="h6">{priceHandler(subtotal)}</Typography>
			</div>
			<div className="flex justify-between">
				<Typography variant="h6">Dostawa</Typography>
				<Typography variant="h6">{priceHandler(shippingPrice)}</Typography>
			</div>
			<Separator fullWidth />
			<div className="flex justify-between">
				<Typography variant="h4">Suma</Typography>
				<Typography variant="h4">{priceHandler(totalPrice)}</Typography>
			</div>
			<Typography variant="caption" className="text-end">
				Including VAT
			</Typography>
			<ButtonOrder />
		</BoxShadow>
	);
}
