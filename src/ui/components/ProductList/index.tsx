import { ProductCard } from "@/ui/components/ProductCard";
import { ProductCategory, type Product } from "@/ui/types";
import products from "@/data.json";

type Props = {
	category?: ProductCategory;
	slice?: boolean;
	columns?: number;
};

export function ProductList({ category = ProductCategory.All, slice, columns = 4 }: Props) {
	const _products = products as { data: Product[] };
	const data =
		category === ProductCategory.All
			? _products.data
			: _products.data.filter((product: Product) => product.category === category);
	const dataSliced = slice ? data.slice(0, 4) : data;

	return (
		<ul
			data-testid="products-list"
			className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-${String(columns)}`}
		>
			{dataSliced?.map((product) => <ProductCard key={product.id} product={product} />)}
		</ul>
	);
}
