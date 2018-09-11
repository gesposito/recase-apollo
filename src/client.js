import ApolloClient from "apollo-boost";

const TOKEN = localStorage.getItem("token") || "";

const defaults = {
  selectedProfile: "reactjs"
};

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${TOKEN}`
  },
  clientState: {
    defaults
  }
});

export default client;
