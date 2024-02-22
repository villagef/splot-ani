export type Product = {
	slug: string;
	name: string;
	price: number;
	quantity: number;
	lowestPrice: number;
	previousPrice: number;
	description: string;
	images: {
		url: string;
	}[];
	tag?: string | null;
	categories: {
		name: string;
	}[];
};

export type ProductCardType = Pick<
	Product,
	"slug" | "name" | "price" | "images" | "tag" | "categories"
>;

export type ProductPageProps = {
	params: {
		slug: string;
	};
	searchParams: {
		imgIdx: string;
	};
};
