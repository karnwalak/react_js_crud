import React, { Component } from 'react'
import { NavLink,Link } from "react-router-dom";
import logo from  './logo.png';
export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <NavLink to="/">
                        <img src={logo} />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                        <NavLink to="/" exact className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="about" exact className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="contact" exact className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                   
                    </div>
                </div>
                </nav>
            </>
        )
    }
}

export default Navbar
