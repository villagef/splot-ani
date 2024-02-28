"use client";

import React, { useState } from "react";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Typography } from "@/ui/atoms/Typography";

type Props = {
	id: string;
	quantity: number | null | undefined;
};

export function ButtonIncreaseDecrease({ id, quantity = 0 }: Props) {
	const [count, setCount] = useState<number>(1);
	const handleIncrement = () => setCount((prev) => prev + 1);
	const handleDecrement = () => setCount((prev) => prev - 1);
	console.log(id);

	return (
		<div className="flex w-max items-center gap-2 rounded-md bg-secondary/5 px-1 md:gap-4">
			<ButtonIcon variant="text" disabled={count <= 1} onClick={handleDecrement}>
				<Icons.minus />
			</ButtonIcon>
			<Typography variant="h4" className="w-2">
				{count}
			</Typography>
			<ButtonIcon
				variant="text"
				onClick={handleIncrement}
				disabled={quantity ? count >= quantity : true}
			>
				<Icons.plus />
			</ButtonIcon>
		</div>
	);
}
