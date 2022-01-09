import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            React with Redux
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/redux1">
                redux1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
