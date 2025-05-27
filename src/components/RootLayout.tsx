import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function RootLayout(){
    return(
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}