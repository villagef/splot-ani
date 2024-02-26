import { ProductCategory } from "@/consts";

export const categoryHandler = (category: ProductCategory) => {
	return Object.values(ProductCategory).includes(category) ? category : ProductCategory.All;
};
