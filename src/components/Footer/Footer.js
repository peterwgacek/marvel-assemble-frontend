import React from "react";
import './Footer.css';

export default function Footer(props) {
    return (

        <footer className="Footer">
            <a href="https://marvel.com">DATA PROVIDED BY MARVEL &copy; {new Date().getFullYear()}</a>
            <div className="links">
                <a href="https://www.linkedin.com/in/peterwgacek/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/peterwgacek"><i className="fab fa-github-square"></i></a>
            </div>
        </footer>

    );
}
