"use client";

import { useState } from "react";
import { Button } from "@/ui/atoms/Button";
import { ProductCategory } from "@/consts";

export function CategoriesList() {
	const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(ProductCategory.All);

	return (
		<ul className="flex flex-wrap gap-4 pt-4 md:gap-6 md:pt-0">
			{Object.values(ProductCategory).map((category) => (
				<li key={category}>
					<Button
						className={`${selectedCategory === category && "bg-secondary text-secondary-textLight"} `}
						variant="outlined"
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</Button>
				</li>
			))}
		</ul>
	);
}
