import React from "react";
import "./style.css";

function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            {/* Name in navbar */}
            <a className="navbar-brand cormorant-font" id="nav-text" href="/">Rebecca Eng</a>
            {/* Toggle button in navbar */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar menu links */}
            <div className="collapse navbar-collapse text-secondary" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link cormorant-font" id="index" href="/">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link cormorant-font" id="portfolio" href="/portfolio">Portfolio <span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cormorant-font" id="contact" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;