import { Suspense } from "react";
import { getCollections, getProductsByCollectionSlug } from "@/api/products";
import { Typography } from "@/ui/atoms/Typography";
import { ProductCard } from "@/ui/components/ProductCard";
// import { CollectionsList } from "@/ui/components/CollectionsList";

type Props = {
	params: {
		collectionSlug: string;
	};
};

export default async function Collections({ params }: Props) {
	const products = await getProductsByCollectionSlug({
		query: params?.collectionSlug || "",
	});

	if (!products || products.length === 0) {
		return <Typography variant="h1">Nie znaleziono produktów</Typography>;
	}

	const collections = await getCollections();

	const title =
		collections &&
		collections.find((collection) => collection.slug === params.collectionSlug)?.name;

	return (
		<>
			{/* <CollectionsList /> */}
			<Typography variant="h1" role="heading">
				{title}
			</Typography>
			<Suspense>
				<ul
					data-testid="products-list"
					aria-label="products list"
					className={`mt-8 grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4`}
				>
					{products?.map((product) => <ProductCard key={product.slug} product={product} />)}
				</ul>
			</Suspense>
		</>
	);
}
