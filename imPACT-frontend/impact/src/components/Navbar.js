import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Logo from './../assets/Logo.png'


function Navbar() {

    const user = useSelector((state) => state.user)

    return (
        <nav className="navbar">
            <ul className="navlink">
            {!user.isAuthenticated && (
                <Link to="/">
                    <div><img id="logo1" src={Logo} alt=""/></div>
                </Link>
            )}
            {/* <Link to="/dashboard">
                <li className="navlink">Home</li>
            </Link> */}
            {/* <Link to="/profile">
                <li className="navlink">My Profile</li>
            </Link> */}
            {user && user.isAuthenticated && (
                <Link to="/habits">
                    <li className="navlink">Habits</li>
                </Link>
            )}
            {user && user.isAuthenticated && (
                <Link to="/identities">
                    <li className="navlink">Identities</li>
                </Link>
            )}
            <Link to="/about">
                <li className="navlink">About</li>
            </Link>
            {(!user || !user.isAuthenticated) && (
                <Link to="/login">
                    <li className="navlink">Login</li>
                </Link>
            )}
            {(!user || !user.isAuthenticated) && (
                <Link to="/signup">
                    <li className="navlink">Sign Up</li>
                </Link>
            )}
            {user && user.isAuthenticated && (
                <Link to="/logout">
                    <li className="navlink">Log Out</li>
                </Link>
            )}
            </ul>
            {user && user.isAuthenticated && user.userInfo && (
                <li className="welcome"> Welcome, {user.userInfo.name} </li>
            )}
        </nav>
    )
}

export default Navbar