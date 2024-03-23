import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getAllProducts, getProductsByCategorySlug } from "@/api/products";
import { Links, PRODUCTS_PER_PAGE, ProductCategory, SortOptions } from "@/consts";
import { FiltersCategories } from "@/ui/components/FiltersCategories";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";
import { categoryHandler } from "@/utils/categoryHandler";
import { ProductListLoading } from "@/ui/components/ProductList/loading";
import { ProductsSort } from "@/ui/components/ProductsSort.tsx";

type Props = {
	params: { category: ProductCategory; page: string };
	searchParams: {
		sort: SortOptions | undefined;
	};
};

export function generateStaticParams() {
	return Object.values(ProductCategory).map((category) => ({
		category: category,
		page: "1",
	}));
}

export default async function ProductsPaginated({ params, searchParams }: Props) {
	const _category = categoryHandler(params.category);
	const _pageNumber = params.page ? parseInt(params.page) : 1;
	const _skip = (_pageNumber - 1) * PRODUCTS_PER_PAGE;
	const _path = `${Links.Products}/${_category}/`;
	const orderByValue = searchParams.sort || SortOptions.updatedAt_DESC;

	const orderBy = Object.keys(SortOptions)[Object.values(SortOptions).indexOf(orderByValue)];

	const data =
		_category == ProductCategory.All
			? await getAllProducts({ skip: _skip, orderBy })
			: await getProductsByCategorySlug({
					skip: _skip,
					slug: _category,
					orderBy,
				});

	if (!data) {
		return notFound();
	}

	const products = data?.products || [];
	const totalItems = data?.productsConnection?.aggregate?.count || 0;

	return (
		<>
			<FiltersCategories params={params} />
			<ProductsSort />
			<Suspense fallback={<ProductListLoading />}>
				<ProductList products={products} />
			</Suspense>
			<Pagination
				total={totalItems}
				itemsPerPage={PRODUCTS_PER_PAGE}
				currentPage={_pageNumber}
				path={_path}
				sort={searchParams.sort}
			/>
		</>
	);
}
