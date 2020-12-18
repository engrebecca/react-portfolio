import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-body">
            {/* Name in navbar */}
            <NavLink className="navbar-brand cormorant-font" id="nav-text" to="/">Rebecca Eng</NavLink>
            {/* Icon links */}
            <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" rel="noreferrer" className="text-body"><i
                className="fab fa-linkedin fa-lg mr-3"></i></a>
            <a href="mailto:reng412@gmail.com" className="text-body"><i className="far fa-envelope fa-lg mr-3"></i></a>
            <a href="https://github.com/engrebecca" target="_blank" rel="noreferrer" className="text-body"><i
                className="fab fa-github fa-lg mr-3"></i></a>
            {/* Toggle button in navbar */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" href="#">
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