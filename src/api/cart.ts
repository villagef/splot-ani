import { cookies } from "next/headers";
import { executeGraphQL } from "@/api/graphqlApi";
import { Cookies } from "@/consts";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getCartById = (cartId: string) => {
	return executeGraphQL(CartGetByIdDocument, { id: cartId });
};

export const createCart = () => {
	return executeGraphQL(CartCreateDocument, {});
};

export const addProductToCart = async (cartId: string, productId: string, total: number) => {
	const { product } = await executeGraphQL(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphQL(CartAddProductDocument, {
		cartId,
		productId,
		total,
	});
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
