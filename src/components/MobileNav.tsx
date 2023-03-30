import { FiMoon, FiSun } from "react-icons/fi"
import { useData } from "../hooks"
import { NavLink } from "./NavLink"
import { useLocation } from "react-router-dom"

interface MobileNavProps {
    menuOpen: boolean,
    setMenuOpen: (state: boolean) => void,
}

export function MobileNav({ menuOpen, setMenuOpen} : MobileNavProps) {
    const { menuItems, check, handleTheme } = useData()
    const location = useLocation()
    return (
        <nav className={`lg:hidden top-0 z-[100] w-full bg-primary-bg-light dark:bg-primary-bg-dark absolute ${menuOpen ? "opacity-100" : "translate-y-[-30rem] opacity-0"} transition-all duration-300 ease-in-out `}>
            {/* mobile menu items */}
            <ul className={`rounded-b-0 z-[100] block rounded-b-[20px] shadow-md absolute left-0 top-20 w-full bg-primary-bg-light dark:bg-primary-bg-dark transition-all duration-300 ease-in-out`}
            >
                {menuItems.map((item) => (
                    <li onClick={() => setMenuOpen(false)} key={item.id}>
                        <NavLink
                            key={item.id}
                            activeClassName="text-accent-color hover:text-variant-bg"
                            inactiveClassName="dark:text-white text-gray-lite dark:hover:text-accent-color hover:text-accent-color  "
                            className={`${menuOpen ? "animate-textFadeIn pl-4" : "animate-textFadeOut mx-2.5 rounded-md"
                                } cursor-pointer  transition-all duration-100 ease-in-out  font-poppins font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  ${location.pathname === "/" && item.id === "01"
                                    ? " dark:text-accent-color text-accent-color   "
                                    : ""
                                }`}
                            to={item?.link}
                        >
                            <span className="mr-2 text-xl">{item?.icon}</span>{" "}
                            {item?.name}
                        </NavLink>
                    </li>
                ))}

                {/* mobile dark and light mode button */}

                {check ? (
                    <span
                        onClick={() => handleTheme("dark")}
                        className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer "
                    >
                        <FiMoon className="text-3xl" />
                    </span>
                ) : (
                    <span
                        onClick={() => handleTheme("light")}
                        className="bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer "
                    >
                        <FiSun className="text-white text-3xl" />
                    </span>
                )}
            </ul>
        </nav>
    )
}