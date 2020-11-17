import React from "react";
import "./style.css";

function Header() {

    // Returns a row for each employee in the employees array which can be updated based on a user set filter or sort
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-white">
            {/* Name in navbar */}
            <a class="navbar-brand cormorant-font" id="nav-text" href="/">Rebecca Eng</a>
            {/* Toggle button in navbar */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* Navbar menu links */}
            <div class="collapse navbar-collapse text-secondary" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link cormorant-font" id="index" href="/">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link cormorant-font" id="portfolio" href="/portfolio">Portfolio <span
                            class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cormorant-font" id="contact" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;