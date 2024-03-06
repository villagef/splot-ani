import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { Cookies, GraphqlTags } from "@/consts";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
	return executeGraphQL(CartGetByIdDocument, { id: cartId }, 0, [GraphqlTags.GetCartById]);
};

export const createCart = async () => {
	return executeGraphQL(CartCreateDocument, {});
};

export const addProductToCart = async (
	cartId: string,
	productId: string,
	quantity: number,
	total: number,
) => {
	const { product } = await executeGraphQL(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphQL(CartAddProductDocument, {
		cartId,
		productId,
		quantity,
		total,
	});
	revalidateTag(GraphqlTags.GetCartById);
};

export const getOrCreateCart = async () => {
	const cartId = cookies().get(Cookies.CartId)?.value;
	if (cartId) {
		const cart = await getCartById(cartId);

		if (cart.order) {
			return cart.order;
		}
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	return cart.createOrder;
};
