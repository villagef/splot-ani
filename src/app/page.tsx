import { Typography } from "@/ui/atoms/Typography";
import { Hero } from "@/ui/components/Hero";
import { ProductList } from "@/ui/components/ProductList";
import { Container } from "@/ui/atoms/Container";
import { getAllProducts } from "@/api/products";

export default async function Home() {
	const products = await getAllProducts({ first: 4, skip: 0 });

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
