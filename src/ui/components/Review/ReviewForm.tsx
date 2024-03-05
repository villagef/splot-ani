import { revalidateTag } from "next/cache";
import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";
import { TextArea } from "@/ui/atoms/TextArea";
import { RatingStars } from "@/ui/atoms/RatingStars";
import { addProductReview, publishReview } from "@/api/reviews";

type Props = {
	productId: string;
	slug: string;
};

export function ReviewForm({ productId }: Props) {
	async function addReview(formData: FormData) {
		"use server";

		const title = formData.get("title") as string;
		const content = formData.get("content") as string;
		const rating = Number(formData.get("rating"));
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const { createReview } = await addProductReview(productId, title, name, email, content, rating);

		if (createReview?.id) {
			await publishReview(createReview.id);
			revalidateTag("reviews");
		}
	}

	return (
		<form className="grid w-full gap-3" data-testid="add-review-form" action={addReview}>
			<Input label="Tytuł" name="title" type="text" required />
			<TextArea label="Recenzja" name="content" required />
			<RatingStars label="Ocena" name="rating" required />
			<Input label="Imię" name="name" type="text" required />
			<Input label="Email" name="email" type="email" required />
			<Button type="submit" variant="primary" className="mt-4 w-full">
				Dodaj recenzję
			</Button>
		</form>
	);
}
