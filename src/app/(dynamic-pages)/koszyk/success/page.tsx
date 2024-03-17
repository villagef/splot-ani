import Stripe from "stripe";

type Props = {
	searchParams: {
		session_id: string;
	};
};

export default async function CartSuccessPage({ searchParams }: Props) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
