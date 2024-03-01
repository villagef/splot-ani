import { type ProductDetailsFragment } from "@/gql/graphql";

export const tagsHandler = (
	product: Pick<ProductDetailsFragment, "price" | "previousPrice" | "createdAt">,
) => {
	const createdAt = new Date(product.createdAt as Date).getTime();
	const thirtyDaysAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).getTime();

	const isNewTag = createdAt > thirtyDaysAgo ? "Nowość" : null;

	const isSaleTag =
		product.previousPrice && product.previousPrice > product.price ? "Wyprzedaż" : null;

	return [isNewTag, isSaleTag].filter(Boolean)?.[0];
};
