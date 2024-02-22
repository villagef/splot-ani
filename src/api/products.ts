import { GraphQLClient } from "graphql-request";

type Product = {
	id: string;
	name: string;
	slug: string;
	price: number;
	lowestPrice: number;
	previousPrice: number;
	description: string;
	categories: { name: string }[];
	images: { url: string }[];
};

type ProductsGraphQLResponse = {
	products: Product[];
};

type Params = {
	slug?: string;
	first?: number;
	last?: number;
	before?: string;
	after?: string;
	skip?: number;
};

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string);

export const getProducts = async ({ first = 12, skip = 0 }: Params) => {
	const { products }: ProductsGraphQLResponse = await hygraph.request(
		`{
		products(first: ${first}, skip: ${skip}) {
            slug
            name
            price
            images(first: 1) {
                url
            }
		}
	  }`,
	);

	return products;
};

export const getProduct = async ({ slug }: Params) => {
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
			slug,
		},
	);

	return products[0];
};
