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
    "mutation SubmitWorkEmail($email: String!) {\n  startWorkEmailValidation(email: $email) {\n    id\n    isValidated\n  }\n}": types.SubmitWorkEmailDocument,
    "mutation SubmitWorkEmailCodeValidation($confirmationToken: String!) {\n  validateWorkEmail(confirmationToken: $confirmationToken) {\n    id\n    isValidated\n  }\n}": types.SubmitWorkEmailCodeValidationDocument,
    "query GetOnboardingInformation($email: String!) {\n  workEmail(email: $email) {\n    id\n    isValidated\n  }\n}": types.GetOnboardingInformationDocument,
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
export function graphql(source: "mutation SubmitWorkEmail($email: String!) {\n  startWorkEmailValidation(email: $email) {\n    id\n    isValidated\n  }\n}"): (typeof documents)["mutation SubmitWorkEmail($email: String!) {\n  startWorkEmailValidation(email: $email) {\n    id\n    isValidated\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SubmitWorkEmailCodeValidation($confirmationToken: String!) {\n  validateWorkEmail(confirmationToken: $confirmationToken) {\n    id\n    isValidated\n  }\n}"): (typeof documents)["mutation SubmitWorkEmailCodeValidation($confirmationToken: String!) {\n  validateWorkEmail(confirmationToken: $confirmationToken) {\n    id\n    isValidated\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOnboardingInformation($email: String!) {\n  workEmail(email: $email) {\n    id\n    isValidated\n  }\n}"): (typeof documents)["query GetOnboardingInformation($email: String!) {\n  workEmail(email: $email) {\n    id\n    isValidated\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;