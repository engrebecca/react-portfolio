import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                {/* Name in navbar */}
                <NavbarBrand href="/" className="mr-auto cormorant-font" id="nav-text">Rebecca Eng</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                {/* Navbar collapsable menu */}
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} className="nav-link cormorant-font" id="index" to="/" exact>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="nav-link cormorant-font" id="portfolio" to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="nav-link cormorant-font" id="contact" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                    {/* Icon links */}
                    <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" rel="noreferrer" className="text-body"><i
                        className="fab fa-linkedin fa-lg mr-3"></i></a>
                    <a href="mailto:reng412@gmail.com" className="text-body"><i className="far fa-envelope fa-lg mr-3"></i></a>
                    <a href="https://github.com/engrebecca" target="_blank" rel="noreferrer" className="text-body"><i
                        className="fab fa-github fa-lg mr-3"></i></a>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;