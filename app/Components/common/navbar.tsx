import ToggleButton from "../ToggleButton";
import NavbarRoutes from "./navbar-routes"
import { IoSearch } from "react-icons/io5";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-white dark:bg-[#1B1F23] border-b shadow-sm">
            
            <div className="flex relative h-full justify-between w-full md:w-[1132px]">
                <div className="flex gap-2 justify-center items-center">
                
                    <img src="/images/linkedin-logo.png" alt="linkedin logo" className="w-8 h-9" />
                    <div className="px-2 items-center gap-1 bg-slate-100 dark:bg-[#38434F] p-2 rounded hidden md:flex">
                        <IoSearch />
                        <input type="text" placeholder="Search" className="outline-none bg-transparent" />
                    </div>
                    
                </div>
                <NavbarRoutes />
            </div>
        </div>
    )
}