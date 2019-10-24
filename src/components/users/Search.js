import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({showClear,clearUsers,searchUsers,setAlert}) => {
  const [text, setText] = useState('');
 
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "secondary");
    } else {
      searchUsers(text);
      setText('');
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="Search users..."
            value={text}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    );

}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
