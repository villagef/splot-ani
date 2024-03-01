"use server";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartChangeProductQuantityDocument } from "@/gql/graphql";

export const changeProductQuantity = async (quantity: number, orderItemId: string) => {
	await executeGraphQL(CartChangeProductQuantityDocument, {
		quantity,
		orderItemId,
	});
};
