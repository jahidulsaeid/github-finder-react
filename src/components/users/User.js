import React, { Fragment, Component } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos:PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos:PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const { loading,repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>{" "}
        Hireable:{" "}
        {hireable ? (
          <i class="fas fa-check text-success" />
        ) : (
          <i class="fas fa-times text-danger" />
        )}
        <div className="card mt-2 p-3">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                className="rounded-circle"
                style={{ width: "150px" }}
                src={avatar_url}
                alt=""
              />
              <h5>{name}</h5>
              <p>Location: {location}</p>
            </div>
            <div className="col-md-8">
              <h3>Bio</h3>
              <p>{bio}</p>
              <a class="btn btn-primary my-1" href={html_url} role="button">
                Visit Github Profile
              </a>
              <ul class="list-group">
                <li class="list-group-item border-0">
                  {login && (
                    <Fragment>
                      <strong>Username: </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li class="list-group-item border-0">
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li class="list-group-item border-0">
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="d-flex justify-content-center p-2">
            <span class="badge badge-primary mr-2">Followers: {followers}</span>
            <span class="badge badge-secondary mr-2">
              Following: {following}
            </span>
            <span class="badge badge-success mr-2">
              Public Repos: {public_repos}
            </span>
            <span class="badge badge-info mr-2">
              Public Gists: {public_gists}
            </span>
          </div>
        </div>
        <Repos repos={repos}/>
      </Fragment>
    );
  }
}

export default User;
