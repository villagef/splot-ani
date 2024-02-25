/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Product($slug: String!) {\n  products(where: {slug: $slug}) {\n    ...ProductCommon\n    lowestPrice\n    previousPrice\n    quantity\n    description\n  }\n}": types.ProductDocument,
    "fragment ProductCommon on Product {\n  slug\n  name\n  price\n  images(first: 1) {\n    url\n  }\n  categories(first: 1) {\n    name\n  }\n}": types.ProductCommonFragmentDoc,
    "fragment ProductDetails on Product {\n  ...ProductCommon\n  lowestPrice\n  previousPrice\n  quantity\n  description\n}": types.ProductDetailsFragmentDoc,
    "query ProductsGetAll($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductCommon\n  }\n  productsConnection(first: $first, skip: $skip) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetAllDocument,
    "query ProductsGetByCategorySlug($first: Int!, $slug: String!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductCommon\n    }\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetMostPopular($slug: String!) {\n  products(orderBy: publishedAt_DESC, first: 4, where: {NOT: {slug: $slug}}) {\n    ...ProductCommon\n  }\n}": types.ProductsGetMostPopularDocument,
    "query ProductsGetTop {\n  products(first: 4, where: {top: true}) {\n    ...ProductCommon\n  }\n}": types.ProductsGetTopDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Product($slug: String!) {\n  products(where: {slug: $slug}) {\n    ...ProductCommon\n    lowestPrice\n    previousPrice\n    quantity\n    description\n  }\n}"): (typeof documents)["query Product($slug: String!) {\n  products(where: {slug: $slug}) {\n    ...ProductCommon\n    lowestPrice\n    previousPrice\n    quantity\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCommon on Product {\n  slug\n  name\n  price\n  images(first: 1) {\n    url\n  }\n  categories(first: 1) {\n    name\n  }\n}"): (typeof documents)["fragment ProductCommon on Product {\n  slug\n  name\n  price\n  images(first: 1) {\n    url\n  }\n  categories(first: 1) {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  ...ProductCommon\n  lowestPrice\n  previousPrice\n  quantity\n  description\n}"): (typeof documents)["fragment ProductDetails on Product {\n  ...ProductCommon\n  lowestPrice\n  previousPrice\n  quantity\n  description\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAll($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductCommon\n  }\n  productsConnection(first: $first, skip: $skip) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProductsGetAll($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductCommon\n  }\n  productsConnection(first: $first, skip: $skip) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($first: Int!, $slug: String!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductCommon\n    }\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProductsGetByCategorySlug($first: Int!, $slug: String!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductCommon\n    }\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetMostPopular($slug: String!) {\n  products(orderBy: publishedAt_DESC, first: 4, where: {NOT: {slug: $slug}}) {\n    ...ProductCommon\n  }\n}"): (typeof documents)["query ProductsGetMostPopular($slug: String!) {\n  products(orderBy: publishedAt_DESC, first: 4, where: {NOT: {slug: $slug}}) {\n    ...ProductCommon\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTop {\n  products(first: 4, where: {top: true}) {\n    ...ProductCommon\n  }\n}"): (typeof documents)["query ProductsGetTop {\n  products(first: 4, where: {top: true}) {\n    ...ProductCommon\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;