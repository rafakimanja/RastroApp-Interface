import { NavLink } from "react-router";

export default function Navbar(){
    return(
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/form" end>
                Form
            </NavLink>
        </nav>
    )
}