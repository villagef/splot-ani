import type { ProductDetailsFragment } from "@/gql/graphql";
import { tagsHandler } from "@/utils/tagsHandler";

type Props = {
	product: Pick<ProductDetailsFragment, "price" | "previousPrice" | "createdAt">;
};

export function ProductCardTag({ product }: Props) {
	const tags = tagsHandler(product);
	return (
		<div className="absolute right-0 top-0 z-10 flex gap-2">
			{tags &&
				tags.length > 0 &&
				tags.map((tag, idx) => (
					<div
						key={tag}
						className={` bg-primary/70 px-2 py-1 text-sm uppercase text-primary-textLight ${idx === tags.length - 1 ? "rounded-bl-md rounded-tr-md" : "rounded-b-md"}`}
					>
						{tag}
					</div>
				))}
		</div>
	);
}
