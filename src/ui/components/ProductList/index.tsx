import { Container } from "@/ui/atoms/Container";
import { Typography } from "@/ui/atoms/Typography";
import { ProductCard } from "@/ui/components/ProductCard";
import { type Product } from "@/ui/types";

type Props = {
	products: Product[];
};

export function ProductList({ products }: Props) {
	return (
		<Container>
			<Typography variant="h2" className="text-center">
				Najnowsze produkty
			</Typography>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4"
			>
				{products?.map((product) => <ProductCard key={product.id} product={product} />)}
			</ul>
		</Container>
	);
}
