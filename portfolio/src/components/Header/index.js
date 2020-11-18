import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            {/* Name in navbar */}
            <NavLink className="navbar-brand cormorant-font" id="nav-text" to="/">Rebecca Eng</NavLink>
            {/* Toggle button in navbar */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar menu links */}
            <div className="collapse navbar-collapse text-secondary" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link cormorant-font" id="index" to="/" exact>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link cormorant-font" id="portfolio" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link cormorant-font" id="contact" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;