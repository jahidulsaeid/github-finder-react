import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // console.log(followers,following );

  // const {login,avatar_url,html_url} = props.user;
  return (
    <div className="text-center p-5 col-md-4">
      <img
        src={avatar_url}
        alt=""
        className="rounded-circle center-block"
        style={{ width: "60px", margin: "0 auto" }}
      />
      <h4>{login}</h4>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
