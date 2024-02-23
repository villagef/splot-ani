// import { getAllProducts } from "@/api/products";
import { Typography } from "@/ui/atoms/Typography";
// import { ProductList } from "@/ui/components/ProductList";

export async function ExtraSection() {
	// const products = await getAllProducts({ skip: 0 });

	return (
		<div>
			<Typography variant="h2" className="text-center">
				Inni oglądali również...
			</Typography>
			{/* <ProductList products={products} /> */}
		</div>
	);
}
