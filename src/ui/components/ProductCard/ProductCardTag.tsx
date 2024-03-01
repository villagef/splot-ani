import type { ProductDetailsFragment } from "@/gql/graphql";
import { tagsHandler } from "@/utils/tagsHandler";

type Props = {
	product: Pick<ProductDetailsFragment, "price" | "previousPrice" | "createdAt">;
};

export function ProductCardTag({ product }: Props) {
	const tag = tagsHandler(product);

	return (
		<div className="absolute right-0 top-0 z-10 flex gap-2">
			{tag && (
				<div className="rounded-bl-md rounded-tr-md bg-primary/70 px-2 py-1 text-sm uppercase text-primary-textLight">
					{tag}
				</div>
			)}
		</div>
	);
}
