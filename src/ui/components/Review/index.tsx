import { Suspense } from "react";
import { ReviewForm } from "@/ui/components/Review/ReviewForm";
import { ReviewsList } from "@/ui/components/Review/ReviewsList";
import { Typography } from "@/ui/atoms/Typography";

type Props = {
	productId: string;
};

export function Review({ productId }: Props) {
	return (
		<div className="grid w-full gap-10 p-4 text-secondary-textDark md:py-8 lg:grid-cols-5">
			<div className="flex flex-col items-start justify-start gap-4  lg:col-span-2">
				<Typography variant="h2" className="text-pretty pb-4 text-primary">
					Recenzje produktu
				</Typography>
				<ReviewForm productId={productId} />
			</div>

			<div className="bg-slate-500 lg:col-span-3 lg:col-start-3">
				<Suspense>
					<ReviewsList productId={productId} />
				</Suspense>
			</div>
		</div>
	);
}
