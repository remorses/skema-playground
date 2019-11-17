import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Json: any,
};


export type Language = {
   __typename?: 'Language',
  name?: Maybe<LanguageName>,
  optionsSchema?: Maybe<Scalars['Json']>,
};

export enum LanguageName {
  Python = 'python',
  Typescript = 'typescript'
}

export type Mutation = {
   __typename?: 'Mutation',
  getOutput?: Maybe<Scalars['String']>,
};


export type MutationGetOutputArgs = {
  skema: Scalars['String'],
  options: Scalars['Json']
};

export type Query = {
   __typename?: 'Query',
  languages?: Maybe<Array<Maybe<Language>>>,
};

export type GetLanguagesQueryVariables = {};


export type GetLanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Maybe<Array<Maybe<(
    { __typename?: 'Language' }
    & Pick<Language, 'name' | 'optionsSchema'>
  )>>> }
);

export type GetOutputCodeMutationVariables = {
  skema: Scalars['String'],
  options: Scalars['Json']
};


export type GetOutputCodeMutation = (
  { __typename?: 'Mutation' }
  & { output: Mutation['getOutput'] }
);


export const GetLanguagesDocument = gql`
    query GetLanguages {
  languages {
    name
    optionsSchema
  }
}
    `;
export type GetLanguagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLanguagesQuery, GetLanguagesQueryVariables>, 'query'>;

    export const GetLanguagesComponent = (props: GetLanguagesComponentProps) => (
      <ApolloReactComponents.Query<GetLanguagesQuery, GetLanguagesQueryVariables> query={GetLanguagesDocument} {...props} />
    );
    
export type GetLanguagesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetLanguagesQuery, GetLanguagesQueryVariables> & TChildProps;
export function withGetLanguages<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLanguagesQuery,
  GetLanguagesQueryVariables,
  GetLanguagesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetLanguagesQuery, GetLanguagesQueryVariables, GetLanguagesProps<TChildProps>>(GetLanguagesDocument, {
      alias: 'getLanguages',
      ...operationOptions
    });
};

/**
 * __useGetLanguagesQuery__
 *
 * To run a query within a React component, call `useGetLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLanguagesQuery, GetLanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLanguagesQuery, GetLanguagesQueryVariables>(GetLanguagesDocument, baseOptions);
      }
export function useGetLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLanguagesQuery, GetLanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLanguagesQuery, GetLanguagesQueryVariables>(GetLanguagesDocument, baseOptions);
        }
export type GetLanguagesQueryHookResult = ReturnType<typeof useGetLanguagesQuery>;
export type GetLanguagesLazyQueryHookResult = ReturnType<typeof useGetLanguagesLazyQuery>;
export type GetLanguagesQueryResult = ApolloReactCommon.QueryResult<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const GetOutputCodeDocument = gql`
    mutation GetOutputCode($skema: String!, $options: Json!) {
  output: getOutput(skema: $skema, options: $options)
}
    `;
export type GetOutputCodeMutationFn = ApolloReactCommon.MutationFunction<GetOutputCodeMutation, GetOutputCodeMutationVariables>;
export type GetOutputCodeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GetOutputCodeMutation, GetOutputCodeMutationVariables>, 'mutation'>;

    export const GetOutputCodeComponent = (props: GetOutputCodeComponentProps) => (
      <ApolloReactComponents.Mutation<GetOutputCodeMutation, GetOutputCodeMutationVariables> mutation={GetOutputCodeDocument} {...props} />
    );
    
export type GetOutputCodeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<GetOutputCodeMutation, GetOutputCodeMutationVariables> & TChildProps;
export function withGetOutputCode<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOutputCodeMutation,
  GetOutputCodeMutationVariables,
  GetOutputCodeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, GetOutputCodeMutation, GetOutputCodeMutationVariables, GetOutputCodeProps<TChildProps>>(GetOutputCodeDocument, {
      alias: 'getOutputCode',
      ...operationOptions
    });
};

/**
 * __useGetOutputCodeMutation__
 *
 * To run a mutation, you first call `useGetOutputCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetOutputCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getOutputCodeMutation, { data, loading, error }] = useGetOutputCodeMutation({
 *   variables: {
 *      skema: // value for 'skema'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetOutputCodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetOutputCodeMutation, GetOutputCodeMutationVariables>) {
        return ApolloReactHooks.useMutation<GetOutputCodeMutation, GetOutputCodeMutationVariables>(GetOutputCodeDocument, baseOptions);
      }
export type GetOutputCodeMutationHookResult = ReturnType<typeof useGetOutputCodeMutation>;
export type GetOutputCodeMutationResult = ApolloReactCommon.MutationResult<GetOutputCodeMutation>;
export type GetOutputCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<GetOutputCodeMutation, GetOutputCodeMutationVariables>;