import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary text-white navbar-expand-lg">
      <div className="container">
        <h4 style={{ marginBottom: "0px" }}>
          <i className={icon} /> {title}
        </h4>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto text-white">
          <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-light" to="/about">About</Link></li>
         
        </ul>
        </div>
        
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github",
  icon: "fab fa-facebook"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
