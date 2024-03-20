/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { publishOrder, updateOrderStatus } from "@/api/orders";

export async function POST(req: NextRequest): Promise<Response> {
	const body = await req.text();

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		return new Response("No webhook secret", { status: 500 });
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		return new Response("No Stripe secret key", { status: 500 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
	});

	const signature = req.headers.get("stripe-signature");

	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		body,
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed":
			event.data.object;
			const cartId = event.data.object.metadata?.cartId;

			await updateOrderStatus(cartId!, event.data.object.id, "Completed");
			await publishOrder(cartId!);

			console.log(`Checkout session completed`);
			break;
		case "checkout.session.expired": {
			console.log(event.type);
		}
		case "checkout.session.async_payment_failed": {
			console.log(event.type);
		}
		case "checkout.session.async_payment_succeeded": {
			console.log(event.type);
		}
		default:
			console.log(`Unhandled event type: ${event.type}`);
	}

	return new Response("OK", { status: 200 });
}
