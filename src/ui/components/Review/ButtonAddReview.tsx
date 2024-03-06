"use client";

import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Icons } from "@/ui/Icons";
import { Button } from "@/ui/atoms/Button";
import { Cookies } from "@/consts";
import { cookieGet } from "@/utils/cookieGet";
import { cookieRemove } from "@/utils/cookieRemove";

export function ButtonAddReview() {
	const status = useFormStatus();
	const toastMsg = cookieGet(Cookies.ReviewAddedToast);

	if (toastMsg) {
		toast.success("Recenzja dodana!");
		cookieRemove(Cookies.ReviewAddedToast);
	}

	return (
		<Button type="submit" variant="primary" disabled={status.pending} className="mt-4 w-full">
			{status.pending ? <Icons.spinner className="w-full animate-spin" /> : "Dodaj recenzję"}
		</Button>
	);
}
