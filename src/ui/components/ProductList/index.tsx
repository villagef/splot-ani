import { ProductCard } from "@/ui/components/ProductCard";
import { type Product } from "@/ui/types";

type Props = {
	products: Product[];
	sliceNum?: number;
	columns?: "3" | "4";
};

export function ProductList({ products, sliceNum = 4, columns = "4" }: Props) {
	const dataSliced = products?.slice(0, sliceNum);
	const gridColumns = columns === "3" ? "lg:grid-cols-3" : "lg:grid-cols-4";

	return (
		<ul
			data-testid="products-list"
			className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 ${gridColumns}`}
		>
			{dataSliced?.map((product) => <ProductCard key={product.slug} product={product} />)}
		</ul>
	);
}
