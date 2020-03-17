import React from "react";
const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-primary badge-pill">
                  {props.totalItems}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
