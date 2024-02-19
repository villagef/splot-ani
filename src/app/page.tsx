import { Typography } from "@/ui/atoms/Typography";
import { Hero } from "@/ui/components/Hero";
import { ProductList } from "@/ui/components/ProductList";
import { Container } from "@/ui/atoms/Container";

export default function Home() {
	return (
		<>
			<Hero />
			<Container>
				<Typography variant="h2" className="text-center">
					Topowe produkty
				</Typography>
				<ProductList />
			</Container>
		</>
	);
}
