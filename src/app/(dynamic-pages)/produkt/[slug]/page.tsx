import type { Metadata } from "next/types";
import type { ProductPageProps, Product } from "@/ui/types";
import { ImageSection } from "@/ui/components/Product/ImageSection";
import { ContentSection } from "@/ui/components/Product/ContentSection";
import { getProduct } from "@/api/products";
import { MostPopularProductsList } from "@/ui/components/ProductList/MostPopularProductsList";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const product = (await getProduct({ slug: params.slug })) as Product;

	return {
		title: product.name,
		description: product.description,
		applicationName: "Splotani",
		openGraph: {
			title: product.name,
			description: product.description,
			siteName: "Splotani",
			url: `https://splotani.pl/produkt/${product.slug}`,
			images: [
				{
					url: product.images[0].url,
				},
			],
		},
	};
}

export default async function Product({ params, searchParams }: ProductPageProps) {
	const product = (await getProduct({ slug: params.slug })) as Product;
	const imgIdx = searchParams.imgIdx ? parseInt(searchParams.imgIdx) : 0;

	return (
		<div className="grid w-full gap-10 sm:gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<ImageSection product={product} imgIdx={imgIdx} />
				<ContentSection product={product} />
			</div>
			<MostPopularProductsList slug={params.slug} />
		</div>
	);
}
