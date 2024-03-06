"use client";

import { revalidateTag } from "next/cache";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { removeProductFromCart } from "@/app/(dynamic-pages)/koszyk/actions";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { GraphqlTags } from "@/consts";

type Props = {
	productId: string;
};

export function ButtonRemoveFromCart({ productId }: Props) {
	const status = useFormStatus();

	return (
		<form>
			<ButtonIcon
				variant="text"
				type="submit"
				disabled={status.pending}
				formAction={async () => {
					await removeProductFromCart(productId).then(() => {
						revalidateTag(GraphqlTags.GetCartById);
						toast.success("Produkt usunięty z koszyka!");
					});
				}}
			>
				<Icons.close />
			</ButtonIcon>
		</form>
	);
}
