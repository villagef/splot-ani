import { GraphQLClient } from "graphql-request";
import { type TypedDocumentNode } from "@apollo/client";
import { notFound } from "next/navigation";
import type { QueryParams } from "@/api/types";

export const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentNode<TResult, TVariables>,
	variables: QueryParams,
	revalidate?: NextFetchRequestConfig["revalidate"],
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
			},
		});
		const data = await hygraph.request(query, variables);

		return data;
	} catch (error) {
		console.log(error);
		throw notFound();
	}
};
