import { Suspense } from "react";
import { ReviewForm } from "@/ui/components/Review/ReviewForm";
import { ReviewsList } from "@/ui/components/Review/ReviewsList";
import { Typography } from "@/ui/atoms/Typography";

type Props = {
	productId: string;
	slug: string;
};

export function Review({ productId, slug }: Props) {
	return (
		<div className="grid w-full gap-10 text-secondary-textDark sm:p-4 md:py-8 lg:grid-cols-5">
			<div className="flex flex-col items-start justify-start gap-4  lg:col-span-2">
				<Typography variant="h2" className="text-pretty pb-4 text-primary">
					Recenzje produktu
				</Typography>
				<ReviewForm productId={productId} slug={slug} />
			</div>

			<div className="lg:col-span-3 lg:col-start-3">
				<Suspense>
					<ReviewsList productId={productId} />
				</Suspense>
			</div>
		</div>
	);
}
