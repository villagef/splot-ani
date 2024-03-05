import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";
import { TextArea } from "@/ui/atoms/TextArea";
import { RatingStars } from "@/ui/atoms/RatingStars";

type Props = {
	productId: string;
};

export function ReviewForm({ productId }: Props) {
	async function addReview(e: FormData) {
		"use server";
		console.log(e, productId);
	}

	return (
		<form className="grid w-full gap-3" data-testid="add-review-form" action={addReview}>
			<Input label="Tytuł" name="title" type="text" required />
			<TextArea label="Recenzja" name="review" required />
			<RatingStars label="Ocena" required />
			<Input label="Imię" name="name" type="text" required />
			<Input label="Email" name="email" type="email" required />
			<Button type="submit" variant="primary" className="mt-4 w-full">
				Dodaj recenzję
			</Button>
		</form>
	);
}
