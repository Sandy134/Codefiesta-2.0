import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  const userProfile = localStorage.getItem("user");
  const userObject = JSON.parse(userProfile);

  return (
    <header className="header_wrapper">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="img-fluid"
              alt="img"
              height={50}
              width={50}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/code">
                  Code
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">
                  Profile
                </Link>
              </li>
              {userObject ? (
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/login"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/login"
                    onClick={logoutHandler}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
