import { ProductCategory } from "@/consts";
import { capitalizeString } from "@/utils/capitalizeString";

export const categoryHandler = (category: string) => {
	const _category = capitalizeString(category) as ProductCategory;
	return Object.values(ProductCategory).includes(_category) ? _category : ProductCategory.All;
};
