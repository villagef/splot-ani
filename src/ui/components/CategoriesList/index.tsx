import Link from "next/link";
import { Button } from "@/ui/atoms/Button";
import { ProductCategory } from "@/consts";
import { capitalizeString } from "@/utils/capitalizeString";
import { categoryHandler } from "@/utils/categoryHandler";

type Props = {
	params: { category: ProductCategory };
};

export function CategoriesList({ params }: Props) {
	const paramsCategory = capitalizeString(params.category as string);
	const _category = categoryHandler(paramsCategory);

	return (
		<ul className="flex flex-wrap gap-4 pt-4 md:gap-6 md:pt-0">
			{Object.values(ProductCategory).map((category) => (
				<li key={category}>
					<Link href={`/produkty/${category.toLowerCase()}/1`}>
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
