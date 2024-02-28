"use client";

import { toast } from "sonner";
import { Button } from "@/ui/atoms/Button";
import { Typography } from "@/ui/atoms/Typography";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";

type Props = {
	quantity: number | null | undefined;
};

export function ActionButtons({ quantity = 0 }: Props) {
	const handleAddToCart = () => {
		console.log("Add to cart");
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
					<ButtonIncreaseDecrease id="1" quantity={quantity} />
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
