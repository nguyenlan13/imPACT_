import React from "React"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav>
            <Link to="/dashboard">
                <li>Dashboard</li>
            </Link>
            <Link to="/profile">
                <li>My Profile</li>
            </Link>
            <Link to="/login">
                <li>Login</li>
            </Link>
            <Link to="/signup">
                <li>Sign Up</li>
            </Link>
        </nav>
    )
}

export default Navbar