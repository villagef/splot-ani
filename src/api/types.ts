export type Product = {
	name: string;
	slug: string;
	price: number;
	quantity: number;
	tag: string | null;
	lowestPrice: number;
	previousPrice: number;
	description: string;
	categories: { name: string }[];
	images: { url: string }[];
};

export type ProductsGraphQLResponse = {
	products: Product[];
	productsConnection: {
		pageInfo: {
			pageSize: number;
			hasPreviousPage: boolean;
			hasNextPage: boolean;
		};
	};
};

export type QueryParams = {
	slug?: string;
	first?: number;
	last?: number;
	before?: string;
	after?: string;
	skip?: number;
	category?: string;
};
