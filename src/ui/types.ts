export type Product = {
	id: string;
	name: string;
	price: number;
	image: string;
	tag: string | null;
	category: ProductCategory;
};

export type ProductPageProps = {
	params: {
		id: string;
	};
	searchParams: {
		imgIdx: string;
	};
};

export enum ProductCategory {
	All = "all",
	Bags = "torebki",
	FlowerBeds = "kwietniki",
	Baskets = "koszyczki",
	Other = "inne",
	Seasonal = "sezonowe",
}
