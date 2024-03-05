import { getReviewsByProductId } from "@/api/reviews";
import { Typography } from "@/ui/atoms/Typography";
import { ReviewListItem } from "@/ui/components/Review/ReviewListItem";

type Props = {
	productId: string;
};

export async function ReviewsList({ productId }: Props) {
	const { reviews } = await getReviewsByProductId(productId);
	if (!reviews || reviews.length === 0)
		return (
			<Typography variant="h3" className="text-center">
				Brak recenzji
			</Typography>
		);
	return reviews.map((review) => <ReviewListItem key={review.name} review={review} />);
}
