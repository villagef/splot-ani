import products from "../data.json";
import { ProductList } from "@/ui/components/ProductList";

export default function Home() {
	return (
		<section className="mx-auto">
			<ProductList products={products.data} />
		</section>
	);
}
