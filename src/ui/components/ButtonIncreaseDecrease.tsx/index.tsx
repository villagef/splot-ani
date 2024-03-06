"use client";

import { useOptimistic } from "react";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Typography } from "@/ui/atoms/Typography";
import { changeProductQuantity } from "@/app/(dynamic-pages)/koszyk/actions";

type Props = {
	cartId: string;
	productId: string;
	quantity: number;
	maxQuantity: number | null | undefined;
	price: number;
};

export function ButtonIncreaseDecrease({
	cartId,
	productId,
	quantity,
	maxQuantity = 0,
	price,
}: Props) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, action: "INC" | "DEC") => {
			return action === "INC" ? _state + 1 : _state - 1;
		},
	);

	return (
		<form className="flex w-max items-center gap-2 rounded-md bg-secondary/5 px-1 md:gap-4">
			<ButtonIcon
				variant="text"
				disabled={optimisticQuantity <= 1}
				type="submit"
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity("DEC");
					const _quantity = optimisticQuantity - 1;
					const total = _quantity * price;
					await changeProductQuantity(cartId, productId, _quantity, total);
				}}
			>
				<Icons.minus />
			</ButtonIcon>
			<Typography variant="h6" className="w-2">
				{optimisticQuantity}
			</Typography>
			<ButtonIcon
				variant="text"
				disabled={maxQuantity ? optimisticQuantity >= maxQuantity : true}
				type="submit"
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity("INC");
					const _quantity = optimisticQuantity + 1;
					const total = _quantity * price;
					await changeProductQuantity(cartId, productId, _quantity, total);
				}}
			>
				<Icons.plus />
			</ButtonIcon>
		</form>
	);
}
