import Image from "next/image";
import { type ReviewsGetByProductQuery } from "@/gql/graphql";
import { Icons } from "@/ui/Icons";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Typography } from "@/ui/atoms/Typography";
import { dateHandler } from "@/utils/dateHandler";

type Props = {
	review: ReviewsGetByProductQuery["reviews"][number];
};

export function ReviewListItem({ review }: Props) {
	return (
		<BoxShadow className="mb-4">
			<div className="mb-4 flex items-center gap-4">
				<Image
					src={"/makrama.jpeg"}
					width={50}
					height={50}
					alt="Profile picture of the reviewer"
					className="overflow-hidden rounded-full"
					quality={5}
				/>
				<div>
					<Typography variant="h6">{review.name}</Typography>
					<div className="flex items-center gap-2">
						<Icons.star className="fill-primary stroke-primary" />
						<Typography variant="button">{review.rating}/5</Typography>
					</div>
				</div>
			</div>
			<Typography variant="h6">{review.title}</Typography>
			<Typography variant="body1" className="py-2 italic">
				{review.content}
			</Typography>
			<Typography variant="caption">
				Opublikowano: {dateHandler(review.createdAt as string)}
			</Typography>
		</BoxShadow>
	);
}
