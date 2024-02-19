import { CategoriesList } from "@/ui/components/CategoriesList";
import { ProductList } from "@/ui/components/ProductList";

export default function Products() {
	return (
		<>
			<CategoriesList />
			<ProductList columns={3} sliceNum={9} />
		</>
	);
}
