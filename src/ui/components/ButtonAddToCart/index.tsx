"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/ui/atoms/Button";

export function ButtonAddToCart() {
	const status = useFormStatus();

	return (
		<Button
			type="submit"
			variant="primary"
			color="primary"
			disabled={status.pending}
			className="h-full shadow-sm shadow-primary disabled:cursor-wait"
		>
			Dodaj do koszyka
		</Button>
	);
}
