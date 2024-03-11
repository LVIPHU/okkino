import {getGraphqlClient} from "@okkino/data-access/graphql";

export const gql = getGraphqlClient("http://localhost:3333/graphql", {})
