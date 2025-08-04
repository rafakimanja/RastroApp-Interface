import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
                    Registrar
                </NavLink>
                <NavLink to="/investimentos">
                    Investimenos
                </NavLink>
                <NavLink to="/register">
                    Registros
                </NavLink>
                <NavLink to='/configuracoes'>
                    Configurações
                </NavLink>
            </nav>
            <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ color: 'var(--clr-text)' }}>
                { darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
            </IconButton>
        </header>
    )
}