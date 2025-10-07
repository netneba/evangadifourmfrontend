import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../App";

const Header = () => {
  const { user, setUser } = useContext(AppState); // get user state from context
  const navigate = useNavigate(); // navigate programmatically

  const handleLogout = () => {
    localStorage.removeItem("auth-token"); // remove token from localStorage
    setUser(null); // clear user state
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Evangadi Forum
        </Link>

        <div className="d-flex align-items-center">
          {user ? (
            <>
              {/* Show welcome message and logout button */}
              <span className="text-light me-3">Welcome, {user.username}</span>
              <button className="btn btn-outline-warning btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Show login and register links if not logged in */}
              <Link to="/login" className="btn btn-warning btn-sm me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
