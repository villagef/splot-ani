"use server";
import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { GraphqlTags } from "@/consts";
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
	revalidateTag(GraphqlTags.GetCartById);
};

export const removeProductFromCart = async (productId: string) => {
	await executeGraphQL(CartRemoveProductDocument, {
		productId,
	});
	revalidateTag(GraphqlTags.GetCartById);
};
