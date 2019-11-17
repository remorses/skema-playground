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