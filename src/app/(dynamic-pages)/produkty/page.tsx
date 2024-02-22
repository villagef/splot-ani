import { getProducts } from "@/api/products";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { CategoriesList } from "@/ui/components/CategoriesList";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";

export function generateMetadata() {
	return { title: "Products" };
}

export default async function Products() {
	const products = await getProducts({ skip: 0 });
	return (
		<>
			<CategoriesList />
			<ProductList products={products} columns={"3"} sliceNum={PRODUCTS_PER_PAGE} />
			<Pagination />
		</>
	);
}
