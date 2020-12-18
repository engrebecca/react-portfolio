import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css";

function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                {/* Name in navbar */}
                <NavbarBrand href="/" className="mr-auto cormorant-font" id="nav-text" href="/">Rebecca Eng</NavbarBrand>
                {/* Icon links */}
                <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" rel="noreferrer" className="text-body"><i
                    className="fab fa-linkedin fa-lg mr-3"></i></a>
                <a href="mailto:reng412@gmail.com" className="text-body"><i className="far fa-envelope fa-lg mr-3"></i></a>
                <a href="https://github.com/engrebecca" target="_blank" rel="noreferrer" className="text-body"><i
                    className="fab fa-github fa-lg mr-3"></i></a>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                {/* Navbar collapsable menu */}
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link cormorant-font" id="index" href="/" exact>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link cormorant-font" id="portfolio" href="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link cormorant-font" id="contact" href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;