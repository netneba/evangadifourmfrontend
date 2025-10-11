import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import logo from "../assets/evangadi-logo-footer.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* ===== Logo & Social Icons ===== */}
          <div className="col-md-4 text-center text-md-start">
            <img src={logo} alt="Evangadi Logo" className="footer__logo mb-3" />
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <Link
                to="https://www.facebook.com/evangaditech"
                target="_blank"
                className="social-icon"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/evangaditech/"
                target="_blank"
                className="social-icon"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.youtube.com/@EvangadiTech"
                target="_blank"
                className="social-icon"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* ===== Useful Links ===== */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-semibold mb-2 fs-6 text-uppercase">
              Useful Links
            </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/howItWork" className="footer-link">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-semibold mb-2 fs-6 text-uppercase">
              Contact Info
            </h5>
            <p className="mb-1">Evangadi Networks</p>
            <p className="mb-1">support@evangadi.com</p>
            <p className="mb-0">+1-202-386-2702</p>
          </div>
        </div>

        {/* ===== Bottom Line ===== */}
        <div className="text-center mt-4 small text-secondary">
          &copy; {new Date().getFullYear()} Evangadi Networks. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
