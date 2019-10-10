import React from "react";
import PropTypes from 'prop-types'
import UserItem from "./UserItem";
import Spinner from '../layouts/Spinner'

const Users = ({users, loading}) => {
  if(loading){
    return <Spinner/>
  }else{
    return (
      <div className="container">
        <div className="row">
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users;
