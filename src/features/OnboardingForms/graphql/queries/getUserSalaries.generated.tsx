/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import * as Types from '../../../../api/gql/graphql';

import { gql } from '@apollo/client';
import { SalaryFragmentDoc } from '../fragments/salaryFragment.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@/api/ApolloHooks';
const defaultOptions = {} as const;
export type GetUserSalariesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserSalariesQuery = { __typename?: 'Query', salaries: Array<{ __typename?: 'Salary', amount: number, countryCode: string, currencyCode: string, gender?: Types.Gender | null, genderOtherText?: string | null, id: string, typeOfEmployment: Types.TypeOfEmployment, workMetodology: Types.WorkMetodology, yearsOfExperience: number, company: { __typename?: 'Company', description?: string | null, domain: string }, workRole: { __typename?: 'WorkRole', description?: string | null, id: string, name: string } }> };


export const GetUserSalariesDocument = gql`
    query GetUserSalaries {
  salaries {
    ...Salary
  }
}
    ${SalaryFragmentDoc}`;

/**
 * __useGetUserSalariesQuery__
 *
 * To run a query within a React component, call `useGetUserSalariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSalariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSalariesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSalariesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserSalariesQuery, GetUserSalariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserSalariesQuery, GetUserSalariesQueryVariables>(GetUserSalariesDocument, options);
      }
export function useGetUserSalariesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserSalariesQuery, GetUserSalariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserSalariesQuery, GetUserSalariesQueryVariables>(GetUserSalariesDocument, options);
        }
export function useGetUserSalariesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetUserSalariesQuery, GetUserSalariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetUserSalariesQuery, GetUserSalariesQueryVariables>(GetUserSalariesDocument, options);
        }
export type GetUserSalariesQueryHookResult = ReturnType<typeof useGetUserSalariesQuery>;
export type GetUserSalariesLazyQueryHookResult = ReturnType<typeof useGetUserSalariesLazyQuery>;
export type GetUserSalariesSuspenseQueryHookResult = ReturnType<typeof useGetUserSalariesSuspenseQuery>;
export type GetUserSalariesQueryResult = Apollo.QueryResult<GetUserSalariesQuery, GetUserSalariesQueryVariables>;