import type { Metadata } from "next/types";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ImageSection } from "@/ui/components/Product/ImageSection";
import { ContentSection } from "@/ui/components/Product/ContentSection";
import { getProduct } from "@/api/products";
import { MostPopularProductsList } from "@/ui/components/ProductList/MostPopularProductsList";
import { ProductListLoading } from "@/ui/components/ProductList/loading";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const product = await getProduct({ slug: params.slug });

	if (!product) throw notFound();

	// const siteUrl = `https://splotani.pl/produkt/${product.slug}?imgIdx=0`;

	return {
		title: product.name,
		description: product.description,
		applicationName: "Splotani",
		metadataBase: new URL(`https://splot-ani.vercel.app/produkt/${product.slug}?imgIdx=0`),
		// openGraph: {
		// 	title: product.name,
		// 	description: product.description,
		// 	url: siteUrl,
		// },
		// alternates: {
		// 	canonical: siteUrl,
		// },
	};
}

type Props = {
	params: {
		slug: string;
	};
	searchParams: {
		imgIdx: string;
	};
};

export default async function Product({ params, searchParams }: Props) {
	const product = await getProduct({ slug: params.slug });
	const imgIdx = searchParams.imgIdx ? parseInt(searchParams.imgIdx) : 0;

	if (!product) throw notFound();

	return (
		<div className="grid w-full gap-10 sm:gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<ImageSection product={product} imgIdx={imgIdx} />
				<ContentSection product={product} />
			</div>
			<Suspense fallback={<ProductListLoading />}>
				<MostPopularProductsList slug={params.slug} />
			</Suspense>
		</div>
	);
}
