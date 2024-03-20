import { revalidateTag } from "next/cache";
import { type Variables } from "graphql-request";
import { executeGraphQL } from "@/api/graphqlApi";
import {
	OrderPublishDocument,
	type OrderStatus,
	OrderUpdateStatusDocument,
	OrderUpdateTotalDocument,
	OrdersGetAllDocument,
} from "@/gql/graphql";
import { GraphqlTags } from "@/consts";

export const getAllOrders = async ({ userId }: Variables) => {
	const graphqlResponse = await executeGraphQL(
		OrdersGetAllDocument,
		{
			userId,
		},
		0,
		[GraphqlTags.GetAllOrders],
	);
	return graphqlResponse?.orders;
};

export const updateOrderTotal = async (cartId: string, total: number) => {
	await executeGraphQL(OrderUpdateTotalDocument, {
		cartId,
		total,
	});
	revalidateTag(GraphqlTags.GetCartById);
	revalidateTag(GraphqlTags.GetAllOrders);
};

export const publishOrder = async (cartId: string) => {
	await executeGraphQL(OrderPublishDocument, {
		id: cartId,
	});
};

export const updateOrderStatus = async (
	orderId: string,
	stripeCheckoutId: string,
	status: OrderStatus,
) => {
	await executeGraphQL(OrderUpdateStatusDocument, {
		orderId,
		stripeCheckoutId,
		status,
	});
	revalidateTag(GraphqlTags.GetAllOrders);
};
