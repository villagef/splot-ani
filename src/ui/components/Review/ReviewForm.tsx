import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { Input } from "@/ui/atoms/Input";
import { TextArea } from "@/ui/atoms/TextArea";
import { RatingStars } from "@/ui/atoms/RatingStars";
import { addProductReview, publishReview } from "@/api/reviews";
import { ButtonAddReview } from "@/ui/components/Review/ButtonAddReview";
import { Cookies } from "@/consts";

type Props = {
	productId: string;
	slug: string;
};

export function ReviewForm({ productId }: Props) {
	async function addReview(formData: FormData) {
		"use server";

		const headline = formData.get("headline") as string;
		const content = formData.get("content") as string;
		const rating = Number(formData.get("rating"));
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const { createReview } = await addProductReview(
			productId,
			headline,
			name,
			email,
			content,
			rating,
		);

		if (createReview?.id) {
			await publishReview(createReview.id).then(() => {
				cookies().set(Cookies.ReviewAddedToast, "true");
				revalidateTag("reviews");
			});
		}
	}

	return (
		<form className="grid w-full gap-3" data-testid="add-review-form" action={addReview}>
			<Input label="Tytuł" name="headline" type="text" required />
			<TextArea label="Recenzja" name="content" required />
			<RatingStars label="Ocena" name="rating" required />
			<Input label="Imię" name="name" type="text" required />
			<Input label="Email" name="email" type="email" required />
			<ButtonAddReview />
		</form>
	);
}
