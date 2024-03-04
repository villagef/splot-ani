"use client";

import { removeProductFromCart } from "@/app/(dynamic-pages)/koszyk/actions";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {
	productId: string;
};

export function ButtonRemoveFromCart({ productId }: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<ButtonIcon
			variant="text"
			type="submit"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeProductFromCart(productId);
					router.refresh();
				});
			}}
		>
			<Icons.close />
		</ButtonIcon>
	);
}
