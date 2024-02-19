import { ProductCard } from "@/ui/components/ProductCard";
import { ProductCategory, type Product } from "@/ui/types";
import products from "@/data.json";

type Props = {
	category?: ProductCategory;
	sliceNum?: number;
	columns?: number;
};

export function ProductList({ category = ProductCategory.All, sliceNum = 4, columns = 4 }: Props) {
	const _products = products as { data: Product[] };
	const data =
		category === ProductCategory.All
			? _products.data
			: _products.data.filter((product: Product) => product.category === category);
	const dataSliced = data.slice(0, sliceNum);

	return (
		<ul
			data-testid="products-list"
			className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-${String(columns)}`}
		>
			{dataSliced?.map((product) => <ProductCard key={product.id} product={product} />)}
		</ul>
	);
}
