/* eslint-disable max-lines */
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
};

export type ActivityMetric = {
  __typename?: 'ActivityMetric';
  /** number of active C1 issue comments contributors in the past 90 days */
  activeC1IssueCommentsContributorCount?: Maybe<Scalars['Float']>;
  /** number of active C1 issue create contributors in the past 90 days */
  activeC1IssueCreateContributorCount?: Maybe<Scalars['Float']>;
  /** number of active C1 pr comments contributors in the past 90 days */
  activeC1PrCommentsContributorCount?: Maybe<Scalars['Float']>;
  /** number of active C1 pr create contributors in the past 90 days */
  activeC1PrCreateContributorCount?: Maybe<Scalars['Float']>;
  /** number of active C2 developers in the past 90 days */
  activeC2ContributorCount?: Maybe<Scalars['Float']>;
  /** score of activity metric model */
  activityScore?: Maybe<Scalars['Float']>;
  /** number of issues closed in the past 90 days */
  closedIssuesCount?: Maybe<Scalars['Float']>;
  /** mean of comments per PR over the past 90 days */
  codeReviewCount?: Maybe<Scalars['Float']>;
  /** mean of comments per issue over the past 90 days */
  commentFrequency?: Maybe<Scalars['Float']>;
  /** mean of submissions per week over the past 90 days */
  commitFrequency?: Maybe<Scalars['Float']>;
  /** number of active D1 developers in the past 90 days */
  contributorCount?: Maybe<Scalars['Float']>;
  /** number of months since the project was created */
  createdSince?: Maybe<Scalars['Float']>;
  /** metric model creatiton time */
  grimoireCreationDate?: Maybe<Scalars['ISO8601DateTime']>;
  /** metric model object identification */
  label?: Maybe<Scalars['String']>;
  /** metric model object level */
  level?: Maybe<Scalars['String']>;
  /** number of issue updates in the past 90 days */
  updatedIssuesCount?: Maybe<Scalars['Float']>;
  /** (average of months from the last code commit to the time of statistics */
  updatedSince?: Maybe<Scalars['Float']>;
};

export type CodequalityMetric = {
  __typename?: 'CodequalityMetric';
  /** ratio of merge pulls and all pulls */
  codeMergeRatio?: Maybe<Scalars['Float']>;
  /** score of code quality metric model */
  codeQualityGuarantee?: Maybe<Scalars['Float']>;
  /** ratio of pulls with one more reviewers and all pulls */
  codeReviewRatio?: Maybe<Scalars['Float']>;
  /** mean of submissions per week over the past 90 days */
  commitFrequency?: Maybe<Scalars['Float']>;
  /** number of active D1 developers in the past 90 days */
  contributorCount?: Maybe<Scalars['Float']>;
  /** metric model creatiton time */
  grimoireCreationDate?: Maybe<Scalars['ISO8601DateTime']>;
  /** maintenance status */
  isMaintained?: Maybe<Scalars['Boolean']>;
  /** metric model object identification */
  label?: Maybe<Scalars['String']>;
  /** metric model object level */
  level?: Maybe<Scalars['String']>;
  /** average of lines code each commit */
  locFrequency?: Maybe<Scalars['Float']>;
  /** ratio of pulls which are linked issues and all pulls */
  prIssueLinkedRatio?: Maybe<Scalars['Float']>;
};

export type CommunityMetric = {
  __typename?: 'CommunityMetric';
  /** number of pulls closed in the past 90 days */
  closedPrsCount?: Maybe<Scalars['Float']>;
  /** mean of comments per PR over the past 90 days */
  codeReviewCount?: Maybe<Scalars['Float']>;
  /** mean of comments per issue over the past 90 days */
  commentFrequency?: Maybe<Scalars['Float']>;
  /** score of community support metric model */
  communitySupportScore?: Maybe<Scalars['Float']>;
  /** metric model creatiton time */
  grimoireCreationDate?: Maybe<Scalars['ISO8601DateTime']>;
  /** mean of issues first response time (days) */
  issueFirstReponseAvg?: Maybe<Scalars['Float']>;
  /** middle of issues first response time (days) */
  issueFirstReponseMid?: Maybe<Scalars['Float']>;
  /** mean of issues open time (days) */
  issueOpenTimeAvg?: Maybe<Scalars['Float']>;
  /** middle of issues open time (days) */
  issueOpenTimeMid?: Maybe<Scalars['Float']>;
  /** metric model object identification */
  label?: Maybe<Scalars['String']>;
  /** metric model object level */
  level?: Maybe<Scalars['String']>;
  /** mean of pulls open time (days) */
  prOpenTimeAvg?: Maybe<Scalars['Float']>;
  /** middle of pulls open time (days) */
  prOpenTimeMid?: Maybe<Scalars['Float']>;
  /** number of issue updates in the past 90 days */
  updatedIssuesCount?: Maybe<Scalars['Float']>;
};

/** Autogenerated input type of CreateRepoTask */
export type CreateRepoTaskInput = {
  /** Whether to calculate the activity model */
  activity?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether to calculate the codequality model */
  codequality?: InputMaybe<Scalars['Boolean']>;
  /** Whether to calculate the community model */
  community?: InputMaybe<Scalars['Boolean']>;
  /** Whether to execute the enrich task */
  enrich?: InputMaybe<Scalars['Boolean']>;
  /** Whether to execute the raw fetch task */
  raw?: InputMaybe<Scalars['Boolean']>;
  /** Target repository url */
  repoUrl: Scalars['String'];
};

/** Autogenerated return type of CreateRepoTask */
export type CreateRepoTaskPayload = {
  __typename?: 'CreateRepoTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors?: Maybe<Array<Error>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type Error = {
  __typename?: 'Error';
  /** 错误信息 */
  message?: Maybe<Scalars['String']>;
  /** 错误路径 */
  path?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Submit a repository analysis task */
  createRepoTask?: Maybe<CreateRepoTaskPayload>;
};

export type MutationCreateRepoTaskArgs = {
  input: CreateRepoTaskInput;
};

export type Overview = {
  __typename?: 'Overview';
  dimensionsCount?: Maybe<Scalars['Int']>;
  metricsCount?: Maybe<Scalars['Int']>;
  modelsCount?: Maybe<Scalars['Int']>;
  projectsCount?: Maybe<Scalars['Int']>;
  trends?: Maybe<Array<Repo>>;
};

export type ProjectCompletionRow = {
  __typename?: 'ProjectCompletionRow';
  /** metric model object identification */
  label?: Maybe<Scalars['String']>;
  /** metric model object level (project or repo) */
  level?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fuzzy search project by keyword */
  fuzzySearch: Array<ProjectCompletionRow>;
  /** Get activity metrics data of compass */
  metricActivity: Array<ActivityMetric>;
  /** Get code quality metrics data of compass */
  metricCodequality: Array<CodequalityMetric>;
  /** Get community metrics data of compass */
  metricCommunity: Array<CommunityMetric>;
  /** Get overview data of compass */
  overview: Overview;
  /** Get repo data by specified url */
  repo?: Maybe<Repo>;
};

export type QueryFuzzySearchArgs = {
  keyword: Scalars['String'];
};

export type QueryMetricActivityArgs = {
  beginDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  level?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type QueryMetricCodequalityArgs = {
  beginDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  level?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type QueryMetricCommunityArgs = {
  beginDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  level?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type QueryRepoArgs = {
  url: Scalars['String'];
};

export type Repo = {
  __typename?: 'Repo';
  backend?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  forksCount?: Maybe<Scalars['Int']>;
  issuesCount?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  openIssuesCount?: Maybe<Scalars['Int']>;
  origin: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  pullsCount?: Maybe<Scalars['Int']>;
  stargazersCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['ISO8601DateTime'];
  watchersCount?: Maybe<Scalars['Int']>;
};

export type CreateRepoTaskMutationVariables = Exact<{
  repoUrl: Scalars['String'];
}>;

export type CreateRepoTaskMutation = {
  __typename?: 'Mutation';
  createRepoTask?: {
    __typename?: 'CreateRepoTaskPayload';
    message?: string | null;
    status: string;
    errors?: Array<{ __typename?: 'Error'; message?: string | null }> | null;
  } | null;
};

export type SearchQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;

export type SearchQuery = {
  __typename?: 'Query';
  fuzzySearch: Array<{
    __typename?: 'ProjectCompletionRow';
    level?: string | null;
    label?: string | null;
  }>;
};

export type OverviewQueryVariables = Exact<{ [key: string]: never }>;

export type OverviewQuery = {
  __typename?: 'Query';
  overview: {
    __typename?: 'Overview';
    projectsCount?: number | null;
    dimensionsCount?: number | null;
    metricsCount?: number | null;
    modelsCount?: number | null;
    trends?: Array<{
      __typename?: 'Repo';
      backend?: string | null;
      forksCount?: number | null;
      issuesCount?: number | null;
      language?: string | null;
      name?: string | null;
      openIssuesCount?: number | null;
      path?: string | null;
      pullsCount?: number | null;
      stargazersCount?: number | null;
      watchersCount?: number | null;
    }> | null;
  };
};

export type RepoQueryVariables = Exact<{
  url: Scalars['String'];
}>;

export type RepoQuery = {
  __typename?: 'Query';
  repo?: {
    __typename?: 'Repo';
    backend?: string | null;
    forksCount?: number | null;
    issuesCount?: number | null;
    language?: string | null;
    name?: string | null;
    openIssuesCount?: number | null;
    origin: string;
    path?: string | null;
    pullsCount?: number | null;
    stargazersCount?: number | null;
    createdAt: any;
    updatedAt: any;
    watchersCount?: number | null;
  } | null;
};

export type MetricQueryVariables = Exact<{
  url: Scalars['String'];
  level?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['ISO8601DateTime']>;
  end?: InputMaybe<Scalars['ISO8601DateTime']>;
}>;

export type MetricQuery = {
  __typename?: 'Query';
  metricCodequality: Array<{
    __typename?: 'CodequalityMetric';
    codeMergeRatio?: number | null;
    codeQualityGuarantee?: number | null;
    codeReviewRatio?: number | null;
    commitFrequency?: number | null;
    contributorCount?: number | null;
    grimoireCreationDate?: any | null;
    isMaintained?: boolean | null;
    label?: string | null;
    level?: string | null;
    locFrequency?: number | null;
    prIssueLinkedRatio?: number | null;
  }>;
  metricCommunity: Array<{
    __typename?: 'CommunityMetric';
    closedPrsCount?: number | null;
    codeReviewCount?: number | null;
    commentFrequency?: number | null;
    communitySupportScore?: number | null;
    grimoireCreationDate?: any | null;
    issueFirstReponseAvg?: number | null;
    issueFirstReponseMid?: number | null;
    issueOpenTimeAvg?: number | null;
    issueOpenTimeMid?: number | null;
    label?: string | null;
    level?: string | null;
    prOpenTimeAvg?: number | null;
    prOpenTimeMid?: number | null;
    updatedIssuesCount?: number | null;
  }>;
  metricActivity: Array<{
    __typename?: 'ActivityMetric';
    activityScore?: number | null;
    closedIssuesCount?: number | null;
    codeReviewCount?: number | null;
    commentFrequency?: number | null;
    commitFrequency?: number | null;
    contributorCount?: number | null;
    createdSince?: number | null;
    grimoireCreationDate?: any | null;
    label?: string | null;
    level?: string | null;
    updatedIssuesCount?: number | null;
    updatedSince?: number | null;
  }>;
};

export const CreateRepoTaskDocument = /*#__PURE__*/ `
    mutation createRepoTask($repoUrl: String!) {
  createRepoTask(input: {repoUrl: $repoUrl}) {
    message
    status
    errors {
      message
    }
  }
}
    `;
export const useCreateRepoTaskMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreateRepoTaskMutation,
    TError,
    CreateRepoTaskMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    CreateRepoTaskMutation,
    TError,
    CreateRepoTaskMutationVariables,
    TContext
  >(
    ['createRepoTask'],
    (variables?: CreateRepoTaskMutationVariables) =>
      fetcher<CreateRepoTaskMutation, CreateRepoTaskMutationVariables>(
        client,
        CreateRepoTaskDocument,
        variables,
        headers
      )(),
    options
  );
useCreateRepoTaskMutation.fetcher = (
  client: GraphQLClient,
  variables: CreateRepoTaskMutationVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<CreateRepoTaskMutation, CreateRepoTaskMutationVariables>(
    client,
    CreateRepoTaskDocument,
    variables,
    headers
  );
export const SearchDocument = /*#__PURE__*/ `
    query search($keyword: String!) {
  fuzzySearch(keyword: $keyword) {
    level
    label
  }
}
    `;
export const useSearchQuery = <TData = SearchQuery, TError = unknown>(
  client: GraphQLClient,
  variables: SearchQueryVariables,
  options?: UseQueryOptions<SearchQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<SearchQuery, TError, TData>(
    ['search', variables],
    fetcher<SearchQuery, SearchQueryVariables>(
      client,
      SearchDocument,
      variables,
      headers
    ),
    options
  );

useSearchQuery.getKey = (variables: SearchQueryVariables) => [
  'search',
  variables,
];
useSearchQuery.fetcher = (
  client: GraphQLClient,
  variables: SearchQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<SearchQuery, SearchQueryVariables>(
    client,
    SearchDocument,
    variables,
    headers
  );
export const OverviewDocument = /*#__PURE__*/ `
    query overview {
  overview {
    projectsCount
    dimensionsCount
    metricsCount
    modelsCount
    trends {
      backend
      forksCount
      issuesCount
      language
      name
      openIssuesCount
      path
      pullsCount
      stargazersCount
      watchersCount
    }
  }
}
    `;
export const useOverviewQuery = <TData = OverviewQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: OverviewQueryVariables,
  options?: UseQueryOptions<OverviewQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<OverviewQuery, TError, TData>(
    variables === undefined ? ['overview'] : ['overview', variables],
    fetcher<OverviewQuery, OverviewQueryVariables>(
      client,
      OverviewDocument,
      variables,
      headers
    ),
    options
  );

useOverviewQuery.getKey = (variables?: OverviewQueryVariables) =>
  variables === undefined ? ['overview'] : ['overview', variables];
useOverviewQuery.fetcher = (
  client: GraphQLClient,
  variables?: OverviewQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<OverviewQuery, OverviewQueryVariables>(
    client,
    OverviewDocument,
    variables,
    headers
  );
export const RepoDocument = /*#__PURE__*/ `
    query repo($url: String!) {
  repo(url: $url) {
    backend
    forksCount
    issuesCount
    language
    name
    openIssuesCount
    origin
    path
    pullsCount
    stargazersCount
    createdAt
    updatedAt
    watchersCount
  }
}
    `;
export const useRepoQuery = <TData = RepoQuery, TError = unknown>(
  client: GraphQLClient,
  variables: RepoQueryVariables,
  options?: UseQueryOptions<RepoQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<RepoQuery, TError, TData>(
    ['repo', variables],
    fetcher<RepoQuery, RepoQueryVariables>(
      client,
      RepoDocument,
      variables,
      headers
    ),
    options
  );

useRepoQuery.getKey = (variables: RepoQueryVariables) => ['repo', variables];
useRepoQuery.fetcher = (
  client: GraphQLClient,
  variables: RepoQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<RepoQuery, RepoQueryVariables>(
    client,
    RepoDocument,
    variables,
    headers
  );
export const MetricDocument = /*#__PURE__*/ `
    query metric($url: String!, $level: String = "repo", $start: ISO8601DateTime, $end: ISO8601DateTime) {
  metricCodequality(url: $url, level: $level, beginDate: $start, endDate: $end) {
    codeMergeRatio
    codeQualityGuarantee
    codeReviewRatio
    commitFrequency
    contributorCount
    grimoireCreationDate
    isMaintained
    label
    level
    locFrequency
    prIssueLinkedRatio
  }
  metricCommunity(url: $url, level: $level, beginDate: $start, endDate: $end) {
    closedPrsCount
    codeReviewCount
    commentFrequency
    communitySupportScore
    grimoireCreationDate
    issueFirstReponseAvg
    issueFirstReponseMid
    issueOpenTimeAvg
    issueOpenTimeMid
    label
    level
    prOpenTimeAvg
    prOpenTimeMid
    updatedIssuesCount
  }
  metricActivity(url: $url, level: $level, beginDate: $start, endDate: $end) {
    activityScore
    closedIssuesCount
    codeReviewCount
    commentFrequency
    commitFrequency
    contributorCount
    createdSince
    grimoireCreationDate
    label
    level
    updatedIssuesCount
    updatedSince
  }
}
    `;
export const useMetricQuery = <TData = MetricQuery, TError = unknown>(
  client: GraphQLClient,
  variables: MetricQueryVariables,
  options?: UseQueryOptions<MetricQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<MetricQuery, TError, TData>(
    ['metric', variables],
    fetcher<MetricQuery, MetricQueryVariables>(
      client,
      MetricDocument,
      variables,
      headers
    ),
    options
  );

useMetricQuery.getKey = (variables: MetricQueryVariables) => [
  'metric',
  variables,
];
useMetricQuery.fetcher = (
  client: GraphQLClient,
  variables: MetricQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<MetricQuery, MetricQueryVariables>(
    client,
    MetricDocument,
    variables,
    headers
  );
