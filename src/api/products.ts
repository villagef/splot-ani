import type { QueryParams } from "@/api/types";
import {
	ProductsGetMostPopularDocument,
	ProductsGetTopDocument,
	ProductGetBySlugDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetAllDocument,
	ProductsGetBySearchQueryDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";
import { PRODUCTS_PER_PAGE } from "@/consts";

export const getProductsByCategorySlug = async ({ skip = 0, slug }: QueryParams) => {
	const graphqlResponse = await executeGraphQL(ProductsGetByCategorySlugDocument, {
		first: PRODUCTS_PER_PAGE,
		slug,
		skip,
	});
	return {
		products: graphqlResponse?.categories[0]?.products,
		productsConnection: graphqlResponse?.productsConnection,
	};
};

export const getAllProducts = async ({ skip = 0 }: QueryParams) => {
	const graphqlResponse = await executeGraphQL(
		ProductsGetAllDocument,
		{
			first: PRODUCTS_PER_PAGE,
			skip,
		},
		60,
	);
	return {
		products: graphqlResponse?.products,
		productsConnection: graphqlResponse?.productsConnection,
	};
};

export const getProduct = async ({ slug }: QueryParams) => {
	const graphqlResponse = await executeGraphQL(ProductGetBySlugDocument, { slug });
	return graphqlResponse?.products[0];
};

export const getTopProducts = async () => {
	const graphqlResponse = await executeGraphQL(ProductsGetTopDocument, {}, 60);
	return graphqlResponse?.products?.map((product) => ({
		...product,
		image: {
			url: product.images[0]?.url,
			alt: product.name,
		},
		category: product.categories[0]?.name,
	}));
};

export const getMostPopularProducts = async ({ slug }: QueryParams) => {
	const graphqlResponse = await executeGraphQL(ProductsGetMostPopularDocument, { slug }, 60);
	return graphqlResponse?.products?.map((product) => ({
		...product,
		image: {
			url: product.images[0]?.url,
			alt: product.name,
		},
		category: product.categories[0]?.name,
	}));
};

export const getProductsBySearchQuery = async ({ query }: QueryParams) => {
	const graphqlResponse = await executeGraphQL(ProductsGetBySearchQueryDocument, {
		query,
	});
	return graphqlResponse?.products;
};
