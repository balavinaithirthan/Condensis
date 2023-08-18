import { Component } from "react";
import "./NavbarStyles.css";

function Navbar() {
    return (
        <>
            <nav>
                <a href='index.html'>
                    <img src=assets />
                </a>
                <div id="title">CONDENSIS</div>
                <div>
                    <ul id="navbar">
                        <li><a href='index.html'>Home</a></li>
                        <li><a href='index.html'>Courses</a></li>
                        <li><a href='index.html'>About</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;