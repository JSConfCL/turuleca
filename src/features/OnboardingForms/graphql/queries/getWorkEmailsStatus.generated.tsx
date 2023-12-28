/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import * as Types from '../../../../api/gql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@/api/ApolloHooks';
const defaultOptions = {} as const;
export type GetWorkEmailsStatusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetWorkEmailsStatusQuery = { __typename?: 'Query', workEmails: Array<{ __typename?: 'ValidatedWorkEmail', id: string, isValidated: boolean, status: Types.EmailStatus, workEmail: string }> };


export const GetWorkEmailsStatusDocument = gql`
    query GetWorkEmailsStatus {
  workEmails {
    id
    isValidated
    status
    workEmail
  }
}
    `;

/**
 * __useGetWorkEmailsStatusQuery__
 *
 * To run a query within a React component, call `useGetWorkEmailsStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkEmailsStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkEmailsStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkEmailsStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>(GetWorkEmailsStatusDocument, options);
      }
export function useGetWorkEmailsStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>(GetWorkEmailsStatusDocument, options);
        }
export function useGetWorkEmailsStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>(GetWorkEmailsStatusDocument, options);
        }
export type GetWorkEmailsStatusQueryHookResult = ReturnType<typeof useGetWorkEmailsStatusQuery>;
export type GetWorkEmailsStatusLazyQueryHookResult = ReturnType<typeof useGetWorkEmailsStatusLazyQuery>;
export type GetWorkEmailsStatusSuspenseQueryHookResult = ReturnType<typeof useGetWorkEmailsStatusSuspenseQuery>;
export type GetWorkEmailsStatusQueryResult = Apollo.QueryResult<GetWorkEmailsStatusQuery, GetWorkEmailsStatusQueryVariables>;