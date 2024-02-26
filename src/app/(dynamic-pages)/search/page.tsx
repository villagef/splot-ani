import { Suspense } from "react";
import { getProductsBySearchQuery } from "@/api/products";
import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";
import { ProductListLoading } from "@/ui/components/ProductList/loading";

type Props = {
	searchParams: {
		query: string;
	};
};

export default async function Search({ searchParams }: Props) {
	const products = await getProductsBySearchQuery({ query: searchParams?.query || "" });

	return products && products.length > 0 ? (
		<Suspense key={searchParams.query} fallback={<ProductListLoading />}>
			<ProductList products={products} columns="3" />
		</Suspense>
	) : (
		<Typography variant="h2" className="text-center">
			Brak produktów o nazwie {searchParams.query}
		</Typography>
	);
}
