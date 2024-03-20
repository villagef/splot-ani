import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { Button } from "@/ui/atoms/Button";
import { Cookies } from "@/consts";
import { getCartById } from "@/api/cart";

export function ButtonOrder() {
	const { userId } = auth();
	const cartId = cookies().get(Cookies.CartId)?.value;

	async function handlePaymentAction() {
		"use server";
		if (!process.env.STRIPE_SECRET_KEY) {
			throw new Error("Stripe secret key is not defined");
		}

		if (!cartId) {
			return;
		}
		const { order: cart } = await getCartById(cartId);

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: "2023-10-16",
		});

		const checkoutSession = await stripe.checkout.sessions.create({
			payment_method_types: ["card", "blik", "paypal"],
			metadata: {
				cartId,
				userId,
			},
			line_items: cart?.orderItems.map((item) => ({
				price_data: {
					currency: "pln",
					product_data: {
						name: item.product?.name || "",
					},
					unit_amount: item.product?.price || 0,
				},
				quantity: item.quantity,
			})),
			shipping_options: [{ shipping_rate: process.env.STRIPE_SHIPPING_RATE_ID }],
			currency: "pln",
			mode: "payment",
			success_url: "http://localhost:3000/koszyk/success?session_id={CHECKOUT_SESSION_ID}",
			cancel_url: "http://localhost:3000/koszyk",
		});

		if (!checkoutSession.url) {
			throw new Error("Checkout session url is not defined");
		}
		cookies().delete(Cookies.CartId);

		redirect(checkoutSession.url);
	}

	return (
		<form action={handlePaymentAction}>
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
