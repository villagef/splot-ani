"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Typography } from "@/ui/atoms/Typography";
import { changeProductQuantity } from "@/app/(dynamic-pages)/koszyk/actions";

type Props = {
	cartId: string;
	productId: string;
	quantity: number;
	maxQuantity: number | null | undefined;
};

export function ButtonIncreaseDecrease({ cartId, productId, quantity, maxQuantity = 0 }: Props) {
	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);
	const status = useFormStatus();

	return (
		<div className="flex w-max items-center gap-2 rounded-md bg-secondary/5 px-1 md:gap-4">
			<ButtonIcon
				variant="text"
				disabled={status.pending || optimisticQuantity <= 1}
				type="submit"
				className={`${status.pending && "disabled:cursor-wait"}`}
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeProductQuantity(cartId, productId, optimisticQuantity - 1);
				}}
			>
				<Icons.minus />
			</ButtonIcon>
			<Typography variant="h6" className="w-2">
				{optimisticQuantity}
			</Typography>
			<ButtonIcon
				variant="text"
				disabled={status.pending || (maxQuantity ? optimisticQuantity >= maxQuantity : true)}
				type="submit"
				className={`${status.pending && "disabled:cursor-wait"}`}
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeProductQuantity(cartId, productId, optimisticQuantity + 1);
				}}
			>
				<Icons.plus />
			</ButtonIcon>
		</div>
	);
}
