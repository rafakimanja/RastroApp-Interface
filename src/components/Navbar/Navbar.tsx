import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import './Navbar.css'

export default function Navbar(){

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    return(
        <header className="navbar">
            <h2 className="logo">RastroApp</h2>
            <nav className="nav-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/form" end>
                    Form
                </NavLink>
            </nav>
            <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '☀️' : '🌙'}
            </button>
        </header>
    )
}