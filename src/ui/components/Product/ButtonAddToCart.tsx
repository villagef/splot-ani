"use client";

import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Button } from "@/ui/atoms/Button";
import { Icons } from "@/ui/Icons";
import { Cookies } from "@/consts";
import { cookieGet } from "@/utils/cookieGet";
import { cookieRemove } from "@/utils/cookieRemove";

export function ButtonAddToCart() {
	const status = useFormStatus();
	const toastMsg = cookieGet(Cookies.ProductAddedToCartToast);

	if (toastMsg) {
		toast.success("Produkt dodany do koszyka!");
		cookieRemove(Cookies.ProductAddedToCartToast);
	}

	return (
		<Button
			type="submit"
			variant="primary"
			color="primary"
			disabled={status.pending}
			data-testid="add-to-cart-button"
			className="h-full shadow-sm shadow-primary disabled:cursor-wait"
		>
			{status.pending ? (
				<Icons.spinner className="w-full animate-spin px-14" />
			) : (
				"Dodaj do koszyka"
			)}
		</Button>
	);
}
