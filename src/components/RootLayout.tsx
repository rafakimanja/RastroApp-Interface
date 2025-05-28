import Navbar from "./Navbar";
import { Outlet } from "react-router";
import './RootLayout.css'

export default function RootLayout(){
    return(
        <div className="bg-root">
            <Navbar/>
            <main className="bg-main">
                <Outlet/>
            </main>
        </div>
    )
}