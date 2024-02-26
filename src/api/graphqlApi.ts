import { GraphQLClient } from "graphql-request";
import { type TypedDocumentNode } from "@apollo/client";
import type { QueryParams } from "@/api/types";

export const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentNode<TResult, TVariables>,
	variables: QueryParams,
): Promise<TResult> => {
	try {
		if (!process.env.HYGRAPH_ENDPOINT) {
			throw new Error("Missing HYGRAPH_ENDPOINT");
		}

		const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);
		const data = await hygraph.request(query, variables);

		return data;
	} catch (error) {
		throw new Error("GraphQL Error", { cause: error });
	}
};
