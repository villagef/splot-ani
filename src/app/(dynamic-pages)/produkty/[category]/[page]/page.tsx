import { getAllProducts, getProductsByCategory } from "@/api/products";
import { type ProductsGraphQLResponse } from "@/api/types";
import { PRODUCTS_PER_PAGE, ProductCategory } from "@/consts";
import { CategoriesList } from "@/ui/components/CategoriesList";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";
import { categoryHandler } from "@/utils/categoryHandler";

type Props = {
	params: { category: ProductCategory; page: string };
};

export function generateMetadata() {
	return { title: "Produkty po kategorii" };
}

export default async function ProductsPaginated({ params }: Props) {
	const _category = categoryHandler(params.category as string) as ProductCategory;
	const _pageNumber = params.page ? parseInt(params.page) : 1;
	const _skip = (_pageNumber - 1) * PRODUCTS_PER_PAGE;
	const _path = `/produkty/${_category.toLowerCase()}/`;

	const data =
		_category == ProductCategory.All
			? ((await getAllProducts({ skip: _skip })) as ProductsGraphQLResponse)
			: ((await getProductsByCategory({
					skip: _skip,
					category: _category as string,
				})) as ProductsGraphQLResponse);

	const products = data?.products || [];
	const totalItems = data?.productsConnection?.pageInfo?.pageSize || 0;

	return (
		<>
			<CategoriesList params={params} />
			<ProductList products={products} columns={"3"} sliceNum={PRODUCTS_PER_PAGE} />
			<Pagination total={totalItems} currentPage={_pageNumber} path={_path} />
		</>
	);
}
