import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Corey Burkett
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav ml-auto nav-flex-icons" style={{ right: 0 }}>
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="https://github.com/cburkett22" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/corey-burkett/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
