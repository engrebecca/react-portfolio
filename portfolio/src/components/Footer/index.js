import React from "react";
import "./style.css";

function Footer() {

    return (
        <footer class="footer mt-auto py-3 text-center">
            <div class="container">
                <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" class="text-white"><i
                    class="fab fa-linkedin fa-2x mr-3"></i></a>
                <a href="mailto:reng412@gmail.com" class="text-white"><i class="far fa-envelope fa-2x mr-3"></i></a>
                <a href="https://github.com/engrebecca" target="_blank" class="text-white"><i
                    class="fab fa-github fa-2x mr-3"></i></a>
            </div>
        </footer>
    );
}

export default Footer;