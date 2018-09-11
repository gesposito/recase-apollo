import React, { Component } from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

import App from "./src/containers/App";

import client from "./src/client";

class Index extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

render(<Index />, document.getElementById("app"));
