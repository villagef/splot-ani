import { PRODUCTS_PER_PAGE } from "@/consts";
import { Icons } from "@/ui/Icons";

export default function Loading() {
	return (
		<div aria-busy="true">
			<ul className="flex flex-wrap gap-4 pt-4 md:gap-6 md:pt-0" aria-label="category filters">
				{Array.from({ length: 4 }, (_, i) => (
					<li
						key={i}
						role="status"
						className="animate-pulse rounded-md shadow-md"
						aria-label="category filter"
					>
						<div className="flex h-8 w-24 items-center justify-center rounded-md border-2 border-secondary/50">
							<div className="h-1 w-16 rounded-full bg-secondary/30"></div>
						</div>
						<span className="sr-only">Loading filter...</span>
					</li>
				))}
			</ul>
			<ul
				data-testid="products-list"
				aria-label="products list"
				className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3`}
			>
				{Array.from({ length: PRODUCTS_PER_PAGE }, (_, i) => (
					<li
						key={i}
						role="status"
						className="animate-pulse rounded-md shadow-md"
						aria-label="product card"
					>
						<div className="flex h-80 items-center justify-center rounded bg-secondary-background">
							<Icons.imagePlaceholder />
						</div>
						<div className="flex items-center justify-between px-2 py-4">
							<div className="h-2 w-48 rounded-full bg-primary/50"></div>
							<div className="h-2 w-16 rounded-full bg-secondary/50"></div>
						</div>
						<span className="sr-only">Loading product cards...</span>
					</li>
				))}
			</ul>
		</div>
	);
}
