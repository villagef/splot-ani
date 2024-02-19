import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";

export default function Products() {
	return (
		<>
			<Typography variant="h2" className="text-center">
				Wszystkie produkty
			</Typography>
			<ProductList columns={3} />
		</>
	);
}
