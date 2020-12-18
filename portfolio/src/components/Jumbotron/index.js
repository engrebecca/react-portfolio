import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import { useLocation } from "react-router-dom";
import "./style.css";

const jumbotext = new Map([["/portfolio", "PORTFOLIO"], ["/contact", "CONTACT"]])

function Jbtrn() {
    const location = useLocation();
    return (
        <div>
            <Jumbotron fluid className="bg-img">
                <Container fluid>
                    <h1 className="text-center cormorant-font" id="jumbo-text">{jumbotext.get(location.pathname) || "ABOUT"}</h1>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Jbtrn;