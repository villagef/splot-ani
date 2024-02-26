import { Icons } from "@/ui/Icons";

export default function Loading() {
	return (
		<ul
			data-testid="products-list"
			aria-label="products list"
			aria-busy="true"
			className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3"
		>
			{Array.from({ length: 6 }, (_, i) => (
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
	);
}
