import React from "react"
import { Link } from "react-router-dom"
import Logo from './../assets/Logo.png'


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navlink">
                
            {/* <Link to="/">
                <div><img id="logo" src={Logo} alt=""/></div>
            </Link> */}
            <Link to="/">
                <li className="navlink">Home</li>
            </Link>
            {/* <Link to="/dashboard">
                <li className="navlink">Home</li>
            </Link> */}
            {/* <Link to="/profile">
                <li className="navlink">My Profile</li>
            </Link> */}
            <Link to="/habits">
                <li className="navlink">Habits</li>
            </Link>
            <Link to="/identities">
                <li className="navlink">Identities</li>
            </Link>
            <Link to="/about">
                <li className="navlink">About</li>
            </Link>
            <Link to="/login">
                <li className="navlink">Login</li>
            </Link>
            <Link to="/signup">
                <li className="navlink">Sign Up</li>
            </Link>
            </ul>
        </nav>
    )
}

export default Navbar