"use server";
import { revalidatePath } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { Links } from "@/consts";
import { CartChangeProductQuantityDocument, CartRemoveProductDocument } from "@/gql/graphql";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
	total: number,
) => {
	await executeGraphQL(CartChangeProductQuantityDocument, {
		cartId,
		productId,
		quantity,
		total,
	});
	revalidatePath(Links.Cart);
};

export const removeProductFromCart = async (productId: string) => {
	return executeGraphQL(CartRemoveProductDocument, {
		productId,
	});
};
