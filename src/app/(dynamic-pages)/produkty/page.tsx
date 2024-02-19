import { PRODUCTS_PER_PAGE } from "@/consts";
import { CategoriesList } from "@/ui/components/CategoriesList";
import { Pagination } from "@/ui/components/Pagination.tsx";
import { ProductList } from "@/ui/components/ProductList";

export default function Products() {
	return (
		<>
			<CategoriesList />
			<ProductList columns={3} sliceNum={PRODUCTS_PER_PAGE} />
			<Pagination />
		</>
	);
}
