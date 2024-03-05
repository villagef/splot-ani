import { GraphQLClient, type Variables } from "graphql-request";
import { type TypedDocumentNode } from "@apollo/client";
import { notFound } from "next/navigation";

export const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentNode<TResult, TVariables>,
	variables: Variables,
	revalidate?: NextFetchRequestConfig["revalidate"],
	tags?: NextFetchRequestConfig["tags"],
): Promise<TResult> => {
	try {
		if (!process.env.HYGRAPH_ENDPOINT) {
			throw new Error("Missing HYGRAPH_ENDPOINT");
		}

		const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${process.env.HYGRAPH_QUERY_TOKEN}`,
			},
			next: {
				revalidate: revalidate,
				tags: tags,
			},
		});
		const data = await hygraph.request(query, variables);

		return data;
	} catch (error) {
		console.log(error);
		throw notFound();
	}
};
