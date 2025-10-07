import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="row g-3">

          {/* Logo & Social Icons */}
          <div className="col-md-4">
            <h2 className="fw-bold fs-4">EVANGADI</h2>
            <div className="d-flex gap-2 mt-1">
              <a href="#" className="text-white fs-5">📘</a> {/* Facebook */}
              <a href="#" className="text-white fs-5">📸</a> {/* Instagram */}
              <a href="#" className="text-white fs-5">▶️</a> {/* YouTube */}
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-1 fs-6">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-white text-decoration-none">How it works</Link>
              </li>
              <li>
                <Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-semibold mb-1 fs-6">Contact Info</h5>
            <p className="mb-1">support@evangadi.com</p>
            <p className="mb-0">+1-202-386-2702</p> 
          </div>

        </div>

        <div className="text-center mt-3 small">
          &copy; {new Date().getFullYear()} EVANGADI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
