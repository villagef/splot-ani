import { Suspense } from "react";
import { Hero } from "@/ui/components/Hero";
import { TopProductsList } from "@/ui/components/ProductList/TopProductsList";
import { ProductListLoading } from "@/ui/components/ProductList/loading";
import { CollectionsList } from "@/ui/components/CollectionsList";
import { Container } from "@/ui/atoms/Container";

export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<ProductListLoading />}>
				<Container>
					<CollectionsList />
				</Container>
				<TopProductsList />
			</Suspense>
		</>
	);
}
