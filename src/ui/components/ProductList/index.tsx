import type { ProductDetailsFragment } from "@/gql/graphql";
import { ProductCard } from "@/ui/components/ProductCard";

type Props = {
	products: Omit<ProductDetailsFragment, "description">[];
	columns?: "3" | "4";
};

export function ProductList({ products, columns = "4" }: Props) {
	const gridColumns = columns === "3" ? "lg:grid-cols-3" : "lg:grid-cols-4";

	return (
		<ul
			data-testid="products-list"
			aria-label="products list"
			className={`grid grid-cols-2 gap-4 py-8 sm:grid-cols-2 sm:gap-8 ${gridColumns}`}
		>
			{products?.map((product) => <ProductCard key={product.slug} product={product} />)}
		</ul>
	);
}
