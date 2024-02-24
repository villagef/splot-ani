import { type ProductCategory } from "@/consts";

type Props = {
	params: { category: ProductCategory };
};

export function generateMetadata() {
	return { title: "Produkty po kategorii" };
}

export default async function Categories({ params }: Props) {
	return <>Kategorie {params.category}</>;
}
