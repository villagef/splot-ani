import { Icons } from "@/ui/Icons";
import { ProductListLoading } from "@/ui/components/ProductList/loading";

export default function Loading() {
	return (
		<div aria-busy="true" className="grid w-full gap-10 sm:gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<div role="status" className="max-w-[500px] animate-pulse rounded-md shadow-md">
					<div className="flex h-96 items-center justify-center rounded bg-secondary-background">
						<Icons.imagePlaceholder />
					</div>
					<ul className="flex items-center justify-start gap-3 px-2 py-4">
						{Array.from({ length: 4 }, (_, i) => (
							<li
								key={i}
								className="flex h-16 w-16 items-center justify-center rounded-sm bg-secondary-background/50"
							>
								<Icons.imagePlaceholder className="h-6 w-6" />
							</li>
						))}
					</ul>
				</div>
				<div role="status" className="animate-pulse rounded-md shadow-md" aria-label="product card">
					<div className="flex h-full flex-col gap-4 rounded bg-secondary-background p-8">
						<div className="mb-8 h-2 w-2/3 rounded-full bg-secondary/50" />
						<div className="h-2 w-1/5 rounded-full bg-secondary/50" />
						<div className="mb-8 h-2 w-1/2 rounded-full bg-primary/50" />
						<div className="h-2 w-full rounded-full bg-secondary/50" />
						<div className="h-2 w-full rounded-full bg-secondary/50" />
						<div className="mb-8 h-2 w-4/5 rounded-full bg-secondary/50" />
						<div className="h-2 w-1/3 rounded-full bg-secondary/50" />
						<div className="h-2 w-1/5 rounded-full bg-secondary/50" />
						<div className="mb-8 h-2 w-3/5 rounded-full bg-secondary/50" />
						<div className="mb-8 h-2 w-1/3 rounded-full bg-secondary/50" />
						<div className="h-6 w-full rounded-md bg-primary/50" />
					</div>
				</div>
			</div>
			<div role="status" className="w-full">
				<ProductListLoading />
			</div>
			<span className="sr-only">Loading product cards...</span>
		</div>
	);
}
