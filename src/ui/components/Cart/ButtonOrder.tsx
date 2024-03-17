import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { Button } from "@/ui/atoms/Button";
import { Links } from "@/consts";

export function ButtonOrder() {
	const { userId } = auth();

	async function handleSubmit() {
		"use server";
		if (!userId) {
			redirect(Links.SignIn);
		}
		console.log("Ordering");
		// redirect(Links.Home);
	}

	return (
		<form action={handleSubmit}>
			<Button
				variant="primary"
				color="primary"
				type="submit"
				className="w-full shadow-md shadow-primary"
			>
				Zamów
			</Button>
		</form>
	);
}
