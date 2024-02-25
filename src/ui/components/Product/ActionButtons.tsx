"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "@/ui/Icons";
import { Button } from "@/ui/atoms/Button";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Typography } from "@/ui/atoms/Typography";
import { Wrapper } from "@/ui/components/Product/Wrapper";

type Props = {
	quantity: number | null | undefined;
};

export function ActionButtons({ quantity = 0 }: Props) {
	const [count, setCount] = useState<number>(1);
	const handleIncrement = () => setCount((prev) => prev + 1);
	const handleDecrement = () => setCount((prev) => prev - 1);
	const handleAddToCart = () => {
		console.log("Add to cart");
		setCount(1);
		toast.success("Dodano do koszyka");
	};

	return (
		<Wrapper>
			{quantity && quantity <= 0 ? (
				<Typography variant="subtitle1" className="text-pretty font-bold text-primary">
					Produkt wyprzedany!
				</Typography>
			) : (
				<>
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
					<Button
						variant="primary"
						color="primary"
						className="w-full shadow-md shadow-primary"
						onClick={handleAddToCart}
					>
						Dodaj do koszyka
					</Button>
				</>
			)}
		</Wrapper>
	);
}
