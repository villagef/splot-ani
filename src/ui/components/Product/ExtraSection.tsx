import { Typography } from "@/ui/atoms/Typography";
import { ProductList } from "@/ui/components/ProductList";
import { ProductCategory } from "@/ui/types";

export function ExtraSection() {
	return (
		<div>
			<Typography variant="h2" className="text-center">
				Inni oglądali również...
			</Typography>
			<ProductList category={ProductCategory.All} />
		</div>
	);
}
