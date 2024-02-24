import { getMostPopularProducts } from "@/api/products";
import { Container } from "@/ui/atoms/Container";
import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";

type Props = {
	slug: string;
};

export async function MostPopularProductsList({ slug }: Props) {
	const products = await getMostPopularProducts({ slug });
	return (
		<Container>
			<Typography variant="h2" className="text-center">
				Inni oglądali również...
			</Typography>
			<ProductList products={products} />
		</Container>
	);
}
