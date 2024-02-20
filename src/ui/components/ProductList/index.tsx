import { ProductCard } from "@/ui/components/ProductCard";
import type { Product } from "@/ui/types";
import products from "@/data.json";
import { ProductCategory } from "@/consts";

type Props = {
	category?: ProductCategory;
	sliceNum?: number;
	columns?: "3" | "4";
};

export function ProductList({
	category = ProductCategory.All,
	sliceNum = 4,
	columns = "4",
}: Props) {
	const _products = products as { data: Product[] };
	const data =
		category === ProductCategory.All
			? _products.data
			: _products.data.filter((product: Product) => product.category === category);
	const dataSliced = data.slice(0, sliceNum);

	const gridColumns = columns === "3" ? "lg:grid-cols-3" : "lg:grid-cols-4";

	return (
		<ul
			data-testid="products-list"
			className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 ${gridColumns}`}
		>
			{dataSliced?.map((product) => <ProductCard key={product.id} product={product} />)}
		</ul>
	);
}
