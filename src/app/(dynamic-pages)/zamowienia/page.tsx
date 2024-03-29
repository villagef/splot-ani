import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAllOrders } from "@/api/orders";
import { Links } from "@/consts";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Typography } from "@/ui/atoms/Typography";
import { dateHandler } from "@/utils/dateHandler";
import { priceHandler } from "@/utils/priceHandler";

export default async function Orders() {
	const user = await currentUser();
	if (!user) {
		redirect(Links.SignIn);
	}
	const emailId = user.primaryEmailAddressId;
	const email = user.emailAddresses.find((email) => email.id === emailId)?.emailAddress;
	const orders = await getAllOrders({ userId: email });
	if (!orders || orders.length === 0) {
		return (
			<Typography variant="h4" className="text-pretty py-4 text-center text-primary">
				Brak produktów
			</Typography>
		);
	}

	return (
		<>
			<Typography variant="h2" className="text-pretty pb-8 pt-2 text-center text-primary">
				Zamówienia
			</Typography>
			<div className="flex w-full flex-col items-center gap-4">
				{orders.map((order) => (
					<BoxShadow key={order.id} className="flex h-fit w-full max-w-[800px] flex-row gap-4">
						<div className="flex w-full justify-between">
							<div className="flex flex-col justify-between gap-2 ">
								<Typography variant="subtitle1">
									Id zamówienia - <b>{order.id}</b>
								</Typography>
								<Typography variant="subtitle1">
									Status zamówienia - <b>{order.currentStatus}</b>
								</Typography>
								<Typography variant="subtitle2">
									Cena zamówienia - <b>{priceHandler(order.total)}</b>
								</Typography>

								<Typography variant="caption">{dateHandler(order.updatedAt as string)}</Typography>
							</div>
						</div>
					</BoxShadow>
				))}
			</div>
		</>
	);
}
