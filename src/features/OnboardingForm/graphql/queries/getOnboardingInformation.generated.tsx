/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import * as Types from '../../../../api/gql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@/api/ApolloHooks';
const defaultOptions = {} as const;
export type GetOnboardingInformationQueryVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
}>;


export type GetOnboardingInformationQuery = { __typename?: 'Query', workEmail: { __typename?: 'WorkEmail', id: string, isValidated: boolean } };


export const GetOnboardingInformationDocument = gql`
    query GetOnboardingInformation($email: String!) {
  workEmail(email: $email) {
    id
    isValidated
  }
}
    `;

/**
 * __useGetOnboardingInformationQuery__
 *
 * To run a query within a React component, call `useGetOnboardingInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnboardingInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnboardingInformationQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetOnboardingInformationQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>(GetOnboardingInformationDocument, options);
      }
export function useGetOnboardingInformationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>(GetOnboardingInformationDocument, options);
        }
export function useGetOnboardingInformationSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>(GetOnboardingInformationDocument, options);
        }
export type GetOnboardingInformationQueryHookResult = ReturnType<typeof useGetOnboardingInformationQuery>;
export type GetOnboardingInformationLazyQueryHookResult = ReturnType<typeof useGetOnboardingInformationLazyQuery>;
export type GetOnboardingInformationSuspenseQueryHookResult = ReturnType<typeof useGetOnboardingInformationSuspenseQuery>;
export type GetOnboardingInformationQueryResult = Apollo.QueryResult<GetOnboardingInformationQuery, GetOnboardingInformationQueryVariables>;