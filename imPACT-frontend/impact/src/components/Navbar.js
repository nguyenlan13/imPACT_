import React from "react"
import { Link } from "react-router-dom"
import Logo from './../assets/Logo.png'


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navlink">
            <Link to="/dashboard">
                <div><img id="logo" src={Logo} alt=""/></div>
            </Link>
            <Link to="/profile">
                <li>My Profile</li>
            </Link>
            <Link to="/habits">
                <li>Habits</li>
            </Link>
            <Link to="/identities">
                <li>Identities</li>
            </Link>
            <Link to="/login">
                <li>Login</li>
            </Link>
            <Link to="/signup">
                <li>Sign Up</li>
            </Link>
            </ul>
        </nav>
    )
}

export default Navbar