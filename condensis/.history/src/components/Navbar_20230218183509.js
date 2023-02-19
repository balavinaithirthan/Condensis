import { Component } from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarBS() {
    return (
        <>
        <Navbar>
            <nav>
                <a href='index.html' id="logo">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9499fd0e-d4bb-4b0e-905f-daf28b8e0eb4/d62uke1-0ca53e98-c1d8-4fc3-97c2-11a0d3751585.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0OTlmZDBlLWQ0YmItNGIwZS05MDVmLWRhZjI4YjhlMGViNFwvZDYydWtlMS0wY2E1M2U5OC1jMWQ4LTRmYzMtOTdjMi0xMWEwZDM3NTE1ODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fvI8uELOC5LkjJionkcRX6p2vSGT6vOQVqiyB79t430" id="logo"/>
                </a>
                <div id="title">ONDENSIS</div>
                <div>
                    <ul id="navbar">
                        <Nav.Link href='/'>Home</Nav.Link>>
                        <Nav.Link href='/About'>Home</Nav.Link>>
                        <Nav.Link href='/'>Home</Nav.Link>>
                    </ul>
                </div>
            </nav>
        </Navbar>
        </>
    )
}

export default NavbarBS;