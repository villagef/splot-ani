import { getMostPopularProducts } from "@/api/products";
import { Container } from "@/ui/atoms/Container";
import { Typography } from "@/ui/atoms/Typography";
import { ProductCard } from "@/ui/components/ProductCard";

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
			<ul
				data-testid="related-products"
				aria-label="products list"
				className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4`}
			>
				{products?.map((product) => <ProductCard key={product.slug} product={product} />)}
			</ul>
		</Container>
	);
}
