import { type ProductCommonFragment } from "@/gql/graphql";

type Props = {
	// product: Pick<ProductCommonFragment, "tag">;
	product: ProductCommonFragment;
};

// export function ProductCardTag({ product: { tag } }: Props) {
export function ProductCardTag({}: Props) {
	const tag = null;
	return (
		tag && (
			<div className="absolute right-0 top-0 z-10 rounded-bl-md rounded-tr-md bg-primary bg-opacity-60 px-2 py-1 text-sm lowercase text-primary-textLight">
				{tag}
			</div>
		)
	);
}
