import { GraphQLClient } from 'graphql-request';

export const getClient = () => {
    return new GraphQLClient('https://gql.hashnode.com');
};
