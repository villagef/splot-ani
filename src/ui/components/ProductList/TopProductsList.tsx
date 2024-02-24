import { getTopProducts } from "@/api/products";
import { Container } from "@/ui/atoms/Container";
import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";

export async function TopProductsList() {
	const products = await getTopProducts();
	return (
		<Container>
			<Typography variant="h2" className="text-center">
				Topowe produkty
			</Typography>
			<ProductList products={products} />
		</Container>
	);
}
