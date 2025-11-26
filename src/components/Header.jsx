import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../App";
import styles from "./header.module.css";
import logo from "../assets/logo..png";

const Header = () => {
  const { user, setUser } = useContext(AppState);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white shadow-sm ${styles.navbar}`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        {/* Logo */}
        <Link to="/" className={`navbar-brand ${styles.brand}`}>
          <img src={logo} alt="Evangadi Logo" className={styles.logo} />
        </Link>

        {/* Right side: Links / Buttons */}

        {/* Navigation Links */}
        <div className={`d-flex align-items-center gap-3 ${styles.navLinks}`}>
          {user ? (
            <>
              <span className={`me-3 ${styles.welcomeText}`}>
                Welcome, {user.username}
              </span>
              <button
                className={` btn-sm me-2 ${styles.btn} ${styles.loginBtn}`}
                onClick={handleLogout}
              >
                {" "}
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/howItWork" className={`btn-sm me-2 ${styles.link}`}>
                How it Works
              </Link>

              <Link
                to="/login"
                className={` btn-sm me-2 ${styles.btn} ${styles.loginBtn}`}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={`btn-sm me-2 ${styles.btn} ${styles.registerBtn}`}
              >
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
