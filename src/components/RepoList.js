import React from "react";

const RepoList = ({ isFetching, repos: { items } }) => {
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!items.length) {
    return <div>No repos found.</div>;
  }

  return (
    <div>
      {items.map(({ node }) => {
        return <h2 key={node.id}>{node.name}</h2>;
      })}
    </div>
  );
};

export default RepoList;
