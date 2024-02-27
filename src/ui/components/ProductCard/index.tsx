import Link from "next/link";
// import { ProductCardTag } from "@/ui/components/ProductCard/ProductCardTag";
import { ProductCardCoverImage } from "@/ui/components/ProductCard/ProductCardCoverImage";
import { ProductCardItemDescription } from "@/ui/components/ProductCard/ProductCardItemDescription";
import type { ProductDetailsFragment } from "@/gql/graphql";

type Props = {
	product: Omit<ProductDetailsFragment, "description">;
};

export function ProductCard({ product }: Props) {
	return (
		<li
			className="rounded-md bg-primary-foreground shadow-md hover:shadow-lg"
			aria-label="product card"
		>
			<Link href={`/produkt/${product.slug}?imgIdx=0`}>
				<article className="relative rounded-md hover:shadow-md">
					{/* <ProductCardTag product={product} /> */}
					<ProductCardCoverImage product={product} />
					<ProductCardItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
}
