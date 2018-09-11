import React, { Component, Fragment } from "react";

import { ApolloConsumer, Query } from "react-apollo";

import { GET_SELECTED_PROFILE, GET_REPOS_BY_PROFILE } from "../queries/";

import RepoList from "../components/RepoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ profile: value });
  }

  handleSubmit(e, client) {
    e.preventDefault();

    client.writeData({ data: { selectedProfile: this.state.profile } });
  }

  render() {
    const { selected, repos } = this.props;

    return (
      <section>
        <Query query={GET_SELECTED_PROFILE}>
          {({ loading, error, data: { selectedProfile } }) => {
            return (
              <Fragment>
                <ApolloConsumer>
                  {client => (
                    <form onSubmit={e => this.handleSubmit(e, client)}>
                      <label>Selected</label>
                      <input
                        type="text"
                        placeholder="Type a GitHub profile name"
                        defaultValue={selectedProfile}
                        onChange={this.handleChange}
                      />
                    </form>
                  )}
                </ApolloConsumer>
                <Query
                  query={GET_REPOS_BY_PROFILE}
                  variables={{ profile: selectedProfile }}
                >
                  {({ loading, error, data: { profile } }) => {
                    return (
                      <Fragment>
                        {profile && (
                          <RepoList
                            isFetching={loading}
                            repos={profile.repos}
                          />
                        )}
                      </Fragment>
                    );
                  }}
                </Query>
              </Fragment>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default App;
