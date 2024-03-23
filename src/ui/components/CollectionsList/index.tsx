import Link from "next/link";
import { type Route } from "next";
import { getCollections } from "@/api/products";
import { Links } from "@/consts";
import { Typography } from "@/ui/atoms/Typography";

export async function CollectionsList(): Promise<JSX.Element | null> {
	const products = await getCollections();

	if (!products) {
		return null;
	}

	const colors = ["bg-primary-categoryOne", "bg-primary-categoryTwo", "bg-primary-categoryThree"];

	return (
		<ul
			data-testid="products-list"
			aria-label="products list"
			className={`mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 `}
		>
			{products?.map((product, index) => (
				<Link href={`${Links.Collections}/${product.slug}` as Route} key={product.slug}>
					<li
						key={product.slug}
						className={`rounded-md ${colors[index]} bg-opacity-90 py-2 text-center hover:${colors[index]} hover:bg-opacity-100 md:py-6`}
					>
						<Typography variant="h4" className="tracking-widest text-primary-textLight">
							{product.name}
						</Typography>
					</li>
				</Link>
			))}
		</ul>
	);
}
