// @ts-nocheck
/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
const apolloImport = "import * as Apollo from '@apollo/client';";

function generateOperationHook(type, name) {
  const operationName = name.charAt(0).toUpperCase() + name.slice(1);
  if (type === "query") {
    return `export const use${operationName}Query = (options?: Apollo.QueryHookOptions<${operationName}Query, ${operationName}QueryVariables>) => {
  return Apollo.useQuery<${operationName}Query, ${operationName}QueryVariables>(${operationName}Document, options);
};
export const use${operationName}LazyQuery = (options?: Apollo.LazyQueryHookOptions<${operationName}Query, ${operationName}QueryVariables>) => {
  return Apollo.useLazyQuery(${operationName}Document, options);
};

export const use${operationName}SuspenseQuery = (options?: Apollo.SuspenseQueryHookOptions<${operationName}Query, ${operationName}QueryVariables>) => {
  return Apollo.useSuspenseQuery(${operationName}Document, options);
};

export const use${operationName}BackgroundQuery = (options?: Apollo.BackgroundQueryHookOptions<${operationName}Query, ${operationName}QueryVariables>) => {
  return Apollo.useBackgroundQuery(${operationName}Document, options);
};
`;
  } else if (type === "mutation") {
    return `export const use${operationName}Mutation = (options?: Apollo.MutationHookOptions<${operationName}Mutation, ${operationName}MutationVariables>) => {
  return Apollo.useMutation(${operationName}Document, options);
};`;
  } else if (type === "subscription") {
    return `export const use${operationName}Subscription = (options?: Apollo.SubscriptionHookOptions<${operationName}Subscription, ${operationName}SubscriptionVariables>) => {
  return Apollo.useSubscription(${operationName}Document, options);
};`;
  }

  return "";
}

function generateFragmentHook(name, fragmentName) {
  return `export const use${fragmentName}Fragment = (options:  { from: Apollo.StoreObject | Apollo.Reference } & Omit<Partial<Apollo.UseFragmentOptions<${fragmentName}Fragment, Apollo.OperationVariables>>, 'from'>) => {
  return Apollo.useFragment<${fragmentName}Fragment>({
    fragment: ${fragmentName}FragmentDoc,
    fragmentName: "${fragmentName}",
    ...options,
        from: {
        __typename: "${name}",
        ...options.from
    },
});
}`;
}

module.exports = {
  plugin: (schema, documents, config) => {
    const hooks = documents.flatMap(({ document }) => {
      const operations = document.definitions
        .filter((def) => def.kind === "OperationDefinition")
        .map((operation) => ({
          type: operation.operation,
          operationName: operation.name.value,
        }));
      const fragments = document.definitions
        .filter((def) => def.kind === "FragmentDefinition")
        .map((fragment) => ({
          name: fragment.typeCondition.name.value,
          fragmentName: fragment.name.value,
        }));
      const solvedOperations = operations.map(({ type, operationName }) =>
        generateOperationHook(type, operationName),
      );
      const solvedFragments = fragments.map(({ name, fragmentName }) =>
        generateFragmentHook(name, fragmentName),
      );
      return [...solvedOperations, ...solvedFragments];
    });

    if (hooks.length) {
      return [apolloImport, ...hooks].join("\n\n");
    }
  },
};
