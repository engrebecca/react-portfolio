import React from "react";

function Footer() {

    return (
        <footer className="footer mt-auto py-3 text-center">
            <div className="container">
                <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" rel="noreferrer" className="footer-text"><i
                    className="fab fa-linkedin fa-2x mr-3"></i></a>
                <a href="mailto:reng412@gmail.com" className="footer-text"><i className="far fa-envelope fa-2x mr-3"></i></a>
                <a href="https://github.com/engrebecca" target="_blank" rel="noreferrer" className="footer-text"><i
                    className="fab fa-github fa-2x mr-3"></i></a>
            </div>
        </footer>
    );
}

export default Footer;