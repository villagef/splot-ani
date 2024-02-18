import { type Product } from "@/ui/types";

type Props = {
	product: Pick<Product, "tag">;
};

export function ProductCardTag({ product: { tag } }: Props) {
	return (
		tag && (
			<div className="absolute right-0 top-0 z-10 rounded-bl-md rounded-tr-md bg-primary bg-opacity-60 px-2 py-1 text-sm lowercase text-primary-textLight">
				{tag}
			</div>
		)
	);
}
