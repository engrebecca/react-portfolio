import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const jumbotext = new Map([["/portfolio", "PORTFOLIO"], ["/contact", "CONTACT"]])

function Jumbotron() {
    const location = useLocation();
    return (
        <div className="jumbotron jumbotron-fluid bg-img">
            <div className="container">
                <h1 className="text-center cormorant-font" id="jumbo-text">{jumbotext.get(location.pathname) || "ABOUT"}</h1>
            </div>
        </div>
    );
}

export default Jumbotron;