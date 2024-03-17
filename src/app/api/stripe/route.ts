/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest): Promise<Response> {
	console.log("Stripe webhook received");
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!webhookSecret) {
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
		await req.text(),
		signature,
		webhookSecret,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed":
			const cartId = event.data.object.metadata?.cartId;
			event.data.object.metadata?.userId;
			console.log("Checkout session completed", cartId);
			break;
		default:
			console.log(`Unhandled event type: ${event.type}`);
	}

	return new Response("OK", { status: 200 });
}
