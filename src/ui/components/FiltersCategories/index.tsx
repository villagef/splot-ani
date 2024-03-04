import Link from "next/link";
import { Button } from "@/ui/atoms/Button";
import { Links, ProductCategory } from "@/consts";
import { categoryHandler } from "@/utils/categoryHandler";

type Props = {
	params: { category: ProductCategory };
};

export function FiltersCategories({ params }: Props) {
	const paramsCategory = params.category as ProductCategory;
	const _category = categoryHandler(paramsCategory);

	return (
		<ul className="flex flex-wrap gap-4 pt-4 md:gap-6 md:pt-0" aria-label="category filters">
			{Object.values(ProductCategory).map((category) => (
				<li key={category}>
					<Link href={`${Links.Products}/${category}/1`}>
						<Button
							className={`${_category === category && "bg-secondary text-secondary-textLight"} `}
							variant="outlined"
						>
							{category}
						</Button>
					</Link>
				</li>
			))}
		</ul>
	);
}
