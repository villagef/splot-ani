import { getAllProducts, getProductsByCategorySlug } from "@/api/products";
import { PRODUCTS_PER_PAGE, ProductCategory } from "@/consts";
import { FiltersCategories } from "@/ui/components/FiltersCategories";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";
import { categoryHandler } from "@/utils/categoryHandler";

type Props = {
	params: { category: ProductCategory; page: string };
};

export async function generateStaticParams() {
	return Object.values(ProductCategory).map((category) => ({
		category: category,
		page: "1",
	}));
}

export default async function ProductsPaginated({ params }: Props) {
	const _category = categoryHandler(params.category);
	const _pageNumber = params.page ? parseInt(params.page) : 1;
	const _skip = (_pageNumber - 1) * PRODUCTS_PER_PAGE;
	const _path = `/produkty/${_category}/`;

	const data =
		_category == ProductCategory.All
			? await getAllProducts({ skip: _skip })
			: await getProductsByCategorySlug({
					skip: _skip,
					slug: _category,
				});

	const products = data?.products || [];
	const itemsPerPage = PRODUCTS_PER_PAGE;
	const totalItems = data?.productsConnection?.aggregate?.count || 0;

	return (
		<>
			<FiltersCategories params={params} />
			<ProductList products={products} columns={"3"} />
			<Pagination
				total={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={_pageNumber}
				path={_path}
			/>
		</>
	);
}
