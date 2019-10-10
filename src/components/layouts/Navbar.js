import React from "react";
import PropTypes from "prop-types";

const  Navbar =({icon, title})=>{

  
    return (
      <nav className="navbar bg-primary text-white">
        <div className="container">
          <h4 style={{ marginBottom: "0px" }}>
            <i className={icon} /> {title}
          </h4>
        </div>
      </nav>
    );
  }

 Navbar.defaultProps = {
    title: "Github",
    icon: "fab fa-facebook"
  };
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Navbar;
