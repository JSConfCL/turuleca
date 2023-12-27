import {
  useMutation,
  MutationFunction,
  MutationResult,
  BaseMutationOptions,
  useLazyQuery,
  MutationHookOptions,
  QueryHookOptions,
  LazyQueryHookOptions,
  SuspenseQueryHookOptions,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  useFragment,
  useQuery,
  useSuspenseQuery,
  useReadQuery,
  useBackgroundQuery,
  SSRMultipartLink,
  DebounceMultipartResponsesLink,
  RemoveMultipartDirectivesLink,
  resetNextSSRApolloSingletons,
} from "@apollo/experimental-nextjs-app-support/ssr";

export type {
  MutationFunction,
  MutationResult,
  BaseMutationOptions,
  MutationHookOptions,
  QueryHookOptions,
  LazyQueryHookOptions,
  SuspenseQueryHookOptions,
};

export {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  useFragment,
  useQuery,
  useSuspenseQuery,
  useLazyQuery,
  useReadQuery,
  useBackgroundQuery,
  SSRMultipartLink,
  DebounceMultipartResponsesLink,
  RemoveMultipartDirectivesLink,
  resetNextSSRApolloSingletons,
  useMutation,
};
