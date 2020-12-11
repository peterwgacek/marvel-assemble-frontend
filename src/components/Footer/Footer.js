import React from "react";
import './Footer.css';

export default function Footer(props) {
    return (

        <footer className="Footer">
            <a href="http://marvel.com">Data provided by  MARVEL &copy;  {new Date().getFullYear()} </a>
            <a href="https://www.linkedin.com/in/peterwgacek/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/peterwgacek"><i class="fab fa-github-square"></i></a>
        </footer>

    );
}
