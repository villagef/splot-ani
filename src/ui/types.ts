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
	All = "wszystkie",
	Bags = "torebki",
	FlowerBeds = "kwietniki",
	Baskets = "koszyczki",
	Seasonal = "sezonowe",
	Other = "inne",
}
