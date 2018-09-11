import gql from "graphql-tag";

export const GET_SELECTED_PROFILE = gql`
  {
    selectedProfile @client
  }
`;
