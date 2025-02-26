import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Smart Healthcare System</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/heart">Heart Disease Prediction</Link></li>
                <li><Link to="/diabetes">Diabetes Prediction</Link></li>
                <li><Link to="*">IoT Monitoring</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
