import { executeGraphQL } from "@/api/graphqlApi";
import {
	ReviewCreateDocument,
	ReviewPublishDocument,
	ReviewsGetByProductDocument,
} from "@/gql/graphql";

export const addProductReview = async (
	productId: string,
	title: string,
	name: string,
	email: string,
	content: string,
	rating: number,
) => {
	return executeGraphQL(ReviewCreateDocument, {
		id: productId,
		title,
		name,
		email,
		content,
		rating,
	});
};

export const getReviewsByProductId = async (productId: string) => {
	return executeGraphQL(ReviewsGetByProductDocument, { id: productId }, 60 * 60 * 24, ["reviews"]);
};

export const publishReview = async (reviewId: string) => {
	await executeGraphQL(ReviewPublishDocument, { id: reviewId });
};
