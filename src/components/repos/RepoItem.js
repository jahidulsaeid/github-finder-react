import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <div className="card-body">
      <h4 className="card-title">
        <a className="card-link" href={repo.html_url}>{repo.name}</a>
      </h4>
      </div>
     
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
