import {getSdk} from "./data-access.gql.gen";
import {GraphQLClient} from "graphql-request";
import {GraphQLClientRequestHeaders, MaybeLazy} from "graphql-request/src/types";


export const getGraphqlClient = (
  url: string,
  config: { headers: MaybeLazy<GraphQLClientRequestHeaders> } | NonNullable<unknown>
) => {
  const client = new GraphQLClient(url, config)
  return getSdk(client)
}
