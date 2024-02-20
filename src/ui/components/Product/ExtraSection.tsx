import { ProductCategory } from "@/consts";
import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";

export function ExtraSection() {
	return (
		<div>
			<Typography variant="h2" className="text-center">
				Inni oglądali również...
			</Typography>
			<ProductList columns="4" category={ProductCategory.All} />
		</div>
	);
}
