import { Suspense } from "react";
import { Hero } from "@/ui/components/Hero";
import { TopProductsList } from "@/ui/components/ProductList/TopProductsList";
import { ProductListLoading } from "@/ui/components/ProductList/loading";

export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<ProductListLoading />}>
				<TopProductsList />
			</Suspense>
		</>
	);
}
