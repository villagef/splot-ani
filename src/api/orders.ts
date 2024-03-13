import { type Variables } from "graphql-request";
import { executeGraphQL } from "@/api/graphqlApi";
import { OrdersGetAllDocument } from "@/gql/graphql";

export const getAllOrders = async ({ userId }: Variables) => {
	const graphqlResponse = await executeGraphQL(
		OrdersGetAllDocument,
		{
			userId
		}
	);
	return graphqlResponse?.orders;
};