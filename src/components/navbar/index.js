import './style.css';
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <Link className="navbar-brand" to="/home">
                Logo Goes Here
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-end" style={{ width: "100%" }}>
                    <li className="nav-item">
                        <Link
                            to="/home"
                            className={
                                window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={
                                window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/activities"
                            className={window.location.pathname === "/activities" ? "nav-link active" : "nav-link"}
                        >
                            Activities
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/schedule"
                            className={window.location.pathname === "/schedule" ? "nav-link active" : "nav-link"}
                        >
                            Schedule
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/goods"
                            className={window.location.pathname === "/goods" ? "nav-link active" : "nav-link"}
                        >
                            Goods
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;