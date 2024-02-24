import { Suspense } from "react";
import { Hero } from "@/ui/components/Hero";
import { TopProductsList } from "@/ui/components/ProductList/TopProductsList";

export default async function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={"Ładowanie..."}>
				<TopProductsList />
			</Suspense>
		</>
	);
}
