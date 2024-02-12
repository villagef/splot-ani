import products from "../data.json";
import { Hero } from "@/ui/components/Hero";
import { ProductList } from "@/ui/components/ProductList";

export default function Home() {
	return (
		<>
			<Hero />
			<ProductList products={products.data} />
		</>
	);
}
