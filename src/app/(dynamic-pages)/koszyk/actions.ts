"use server";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartChangeProductQuantityDocument } from "@/gql/graphql";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraphQL(CartChangeProductQuantityDocument, {
		cartId,
		productId,
		quantity,
	});
};
