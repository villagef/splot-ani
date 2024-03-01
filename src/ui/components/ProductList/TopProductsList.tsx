import { getTopProducts } from "@/api/products";
import { Container } from "@/ui/atoms/Container";
import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";

export async function TopProductsList(): Promise<JSX.Element | null> {
	const products = await getTopProducts();

	if (!products) {
		return null;
	}

	return (
		<Container data-testid="related-products">
			<Typography variant="h2" className="text-center">
				Topowe produkty
			</Typography>
			<ProductList products={products} />
		</Container>
	);
}
