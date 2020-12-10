import React from "react";
import './Footer.css';

export default function Footer(props) {
    return (

        <footer className="Footer">
            <p>Data provided by Marvel &copy;  {new Date().getFullYear()} All Rights Reserved</p>
            {/* <a href="https://www.linkedin.com/in/peterwgacek/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/peterwgacek"><i class="fab fa-github-square"></i></a> */}
        </footer>

    );
}
