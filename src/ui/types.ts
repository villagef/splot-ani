export type Product = {
	slug: string;
	name: string;
	price: number;
	quantity?: number;
	lowestPrice?: number;
	previousPrice?: number;
	description?: string;
	images: {
		url: string;
	}[];
	tag?: string | null;
	categories?: {
		name: string;
	}[];
};

export type ProductPageProps = {
	params: {
		id: string;
	};
	searchParams: {
		imgIdx: string;
	};
};
