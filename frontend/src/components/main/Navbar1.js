import React from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import { useUserContext } from "../../context/UserProvider";

const Navbar1 = () => {
  const { title, themeColor } = app_config;

  const { loggedIn, setLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        <>
          <li className="nav-item">
            <NavLink
              className="nav-link link-light px-2"
              aria-current="page"
              to="/main/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link link-light px-2"
              aria-current="page"
              to="/main/signup"
            >
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };

  const showLogout = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button
            className="btn btn-danger ms-3"
            aria-current="page"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      );
    }
  };

  return (
    <>
      <nav
        className="py-2 border-bottom"
        style={{ backgroundColor: themeColor }}
      >
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/main/home"
                className="nav-link link-light px-2 active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/user/createextension"
                className="nav-link link-light px-2"
              >
                Create Extension
              </NavLink>
            </li>
          </ul>
          <ul className="nav">
            {showLoggedIn()}
            {showLogout()}
          </ul>
        </div>
      </nav>
      <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <div className="d-flex align-items-center">
              <img src="/logo.png" height={50} alt="" />
              &nbsp;&nbsp;
              <h1 className="">
                Smart
                <span style={{ color: "#e279b3", fontWeight: "bold" }}>X</span>
              </h1>
            </div>
          </a>
          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form> */}
        </div>
      </header>
    </>
  );
};

export default Navbar1;
