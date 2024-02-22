import { GraphQLClient } from "graphql-request";
import { type ProductsGraphQLResponse, type QueryParams } from "@/api/types";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string);

export const getProductsByCategory = async ({ first = 12, skip = 0, category }: QueryParams) => {
	try {
		const { products }: ProductsGraphQLResponse = await hygraph.request(
			`query GetProductsByCategory($categories: String!, $first: Int!, $skip: Int!){
			products(where: {categories_every: {name: $categories}}, first: $first, skip: $skip) {
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
		  }`,
			{
				categories: category,
				first,
				skip,
			},
		);
		return products;
	} catch (error) {
		return [];
	}
};

export const getAllProducts = async ({ first = 12, skip = 0 }: QueryParams) => {
	try {
		const { products }: ProductsGraphQLResponse = await hygraph.request(
			`query GetAllProducts($first: Int!, $skip: Int!){
			products(first: $first, skip: $skip) {
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
		  }`,
			{
				first,
				skip,
			},
		);
		return products;
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
