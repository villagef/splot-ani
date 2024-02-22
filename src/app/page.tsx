import { Typography } from "@/ui/atoms/Typography";
import { Hero } from "@/ui/components/Hero";
import { ProductList } from "@/ui/components/ProductList";
import { Container } from "@/ui/atoms/Container";
import { getProducts } from "@/api/products";

export default async function Home() {
	const products = await getProducts({ first: 4, skip: 0 });

	return (
		<>
			<Hero />
			<Container>
				<Typography variant="h2" className="text-center">
					Topowe produkty
				</Typography>
				<ProductList products={products} />
			</Container>
		</>
	);
}
