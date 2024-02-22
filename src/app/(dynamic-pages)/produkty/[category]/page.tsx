import { getAllProducts, getProductsByCategory } from "@/api/products";
import { PRODUCTS_PER_PAGE, ProductCategory } from "@/consts";
import { CategoriesList } from "@/ui/components/CategoriesList";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";
import { categoryHandler } from "@/utils/categoryHandler";

type Props = {
	params: { category: ProductCategory };
};

export function generateMetadata() {
	return { title: "Produkty po kategorii" };
}

export default async function Categories({ params }: Props) {
	const _category = categoryHandler(params.category as string) as ProductCategory;
	const products =
		_category == ProductCategory.All
			? await getAllProducts({ skip: 0 })
			: await getProductsByCategory({ skip: 0, category: _category as string });
	return (
		<>
			<CategoriesList params={params} />
			<ProductList products={products} columns={"3"} sliceNum={PRODUCTS_PER_PAGE} />
			<Pagination />
		</>
	);
}
