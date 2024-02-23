import { GraphQLClient } from "graphql-request";
import { type ProductsGraphQLResponse, type QueryParams } from "@/api/types";
import { PRODUCTS_PER_PAGE } from "@/consts";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string);

export const getProductsByCategory = async ({
	first = PRODUCTS_PER_PAGE,
	skip = 0,
	category,
}: QueryParams) => {
	try {
		const { products, productsConnection }: ProductsGraphQLResponse = await hygraph.request(
			`query GetProductsByCategory($categories: String!, $first: Int!, $skip: Int!){
			products(where: {categories_every: {name: $categories}}, first: $first, skip: $skip, locales: en) {
				slug
				name
				price
				images(first: 1) {
					url
				}
				categories {
					name
				}
			},
			productsConnection(where: {categories_every: {name: $categories}}) {
				pageInfo {
				  pageSize
				  hasPreviousPage
				  hasNextPage
				}
			  }
		  }
		  `,
			{
				categories: category,
				first,
				skip,
			},
		);
		return { products, productsConnection };
	} catch (error) {
		return [];
	}
};

export const getAllProducts = async ({ first = PRODUCTS_PER_PAGE, skip = 0 }: QueryParams) => {
	try {
		const { products, productsConnection }: ProductsGraphQLResponse = await hygraph.request(
			`query GetAllProducts($first: Int!, $skip: Int!){
			products(first: $first, skip: $skip, locales: en) {
				slug
				name
				price
				images(first: 1) {
					url
				}
				categories {
					name
				}
			},
			productsConnection {
				pageInfo {
				  pageSize
				  hasPreviousPage
				  hasNextPage
				}
			  }
		  }`,
			{
				first,
				skip,
			},
		);
		return { products, productsConnection };
	} catch (error) {
		return [];
	}
};

export const getProduct = async ({ slug }: QueryParams) => {
	const { products }: ProductsGraphQLResponse = await hygraph.request(
		`query GetProduct($slug: String!) {
            products(where: { slug: $slug }) {
                slug
                name
                price
				lowestPrice
				previousPrice
				quantity
                images {
                    url
                }
                description
                categories {
                    name
                }

            }
        }`,
		{
			slug: slug,
		},
	);
	return products[0];
};
