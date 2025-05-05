import {IoIosCart, IoIosHeart, IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import { NavLink, useLocation } from "react-router";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const isHomePage = location.pathname === '/' 

    const navlinks = [
        // {name: "Home", path: "/"},
        {name: "Statistics", path: "/statistics"},
        {name: "dashboard", path: "/dashboard"},
    ]

    return (
        <nav className={`border border-[#dcd5d5] sectionBase w-full mx-auto rounded-xl flex items-center justify-between relative shadow-md ${isHomePage ? "bgprimary" : ""}`}>

            {/* logo */}
            <a href="/" className={`text-xl font-bold ${isHomePage ? "text-white" : "text-black"}`}>Gadget Haven</a>

            {/* nav menus */}
            <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
                <li className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize ${isHomePage ? "textthirdary hover:border-b-[#ffffff]" : "textprimary hover:border-b-[#7f21c7]"}`}>
                        <NavLink to='/' className="" >Home</NavLink> 
                    </li>
                {
                    navlinks.map((link, index) => (
                        <li key={index} className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize ${isHomePage ? "textthirdary hover:border-b-[#ffffff]" : "textprimary hover:border-b-[#7f21c7]"}`}>
                            <NavLink to={link.path} className={({ isActive, }) => isActive ? "textsecondary font-medium" : "" }>{link.name}</NavLink> 
                        </li>
                    ))
                }
            </ul>

            {/* search bar and community links */}
            <div className="flex items-center gap-[10px]">
                <div className="relative md:flex hidden">
                    <input className={`py-1.5 pr-4 border border-text pl-10 rounded-full outline-none bg-white`} placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
                </div> 

                <IoIosCart className={`text-[1.8rem] cursor-pointer transition-all duration-500 ${isHomePage ? "textthirdary" : "textprimary"}`}/>
                <IoIosHeart className={`text-[1.8rem] cursor-pointer transition-all duration-500 ${isHomePage ? "textthirdary" : "textprimary"}`}/>
                <CiMenuFries className={`text-[1.5rem] cursor-pointer transition-all duration-500 md:hidden flex ${isHomePage ? "textthirdary" : "textprimary"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "hidden translate-x-[200px] opacity-0 z-[-1]"} md:hidden bgprimary p-4  absolute top-[45px] right-0 w-[200px] rounded-md transition-all duration-300`}>

                <div className="w-full relative mb-5">
                    <input className={`py-1.5 pr-4 w-full border border-text pl-10 rounded-full outline-none bg-white`} placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
                </div>

                <ul className="gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className={`w-fit textthirdary hover:border-b-[#ffffff] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize`}>
                        <NavLink to='/' className={({ isActive, }) => isActive ? "text-white" : "" }>Home</NavLink> 
                    </li>
                    {
                        navlinks.map((link, index) => (
                            <li key={index} className={`w-fit textthirdary hover:border-b-[#ffffff] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize`}>
                                <NavLink to={link.path} className={({ isActive, }) => isActive ? "text-white " : "" }>{link.name}</NavLink> 
                            </li>
                        ))
                    }
                </ul>
            </aside>

        </nav>
    );
};

export default Navbar;