"use server";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartChangeProductQuantityDocument, CartRemoveProductDocument } from "@/gql/graphql";

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

export const removeProductFromCart = async (productId: string) => {
	await executeGraphQL(CartRemoveProductDocument, {
		productId,
	});
};
