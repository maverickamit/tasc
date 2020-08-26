import React from "react";
import "./navbar.css";
import { Router, Link } from "@reach/router";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">Tasc</div>
    <div className="navbar__item">
      <Link to="/">Login</Link>
    </div>
    <div className="navbar__item">
      <Link to="/signup">Sign Up</Link>
    </div>
    <div className="navbar__item">
      <Link to="#">Project Link</Link>
    </div>
  </header>
);

export default NavBar;
