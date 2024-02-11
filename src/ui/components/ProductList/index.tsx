import { ProductCard } from "@/ui/components/ProductCard";
import { Product } from "@/ui/types";

type Props = {
	products: Product[];
};

export function ProductList({ products }: Props) {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products?.map((product) => <ProductCard key={product.id} product={product} />)}
		</ul>
	);
}
