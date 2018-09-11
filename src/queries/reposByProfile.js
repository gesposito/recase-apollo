import gql from "graphql-tag";

export const GET_REPOS_BY_PROFILE = gql`
  query reposByProfile($profile: String!) {
    profile: repositoryOwner(login: $profile) {
      id
      repos: repositories(first: 20) {
        items: edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;
