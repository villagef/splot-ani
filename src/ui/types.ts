import { type ProductCategory } from "@/consts";

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
