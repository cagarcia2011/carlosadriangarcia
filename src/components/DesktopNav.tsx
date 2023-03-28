import { useLocation } from 'react-router-dom'

import { useData } from '../hooks'
import { NavLink } from './NavLink'

export const DesktopNav = () => {

    const { menuItems } = useData();

    const currentLocation = useLocation()

    return (
        <header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#212020] " data-aos="fade-left">
            <nav className={`block mx-auto`}>
                <ul
                className={"flex"}
                >
                {menuItems.map((item) => (
                    <NavLink
                    key={item.id}
                    activeClassName=" text-white bg-gradient-to-r from-accent-color to-variant-bg "
                    inactiveClassName="transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-accent-color to-variant-bg text-gray-lite dark:text-[#A6A6A6] "
                    className={`${
                        item.id === "06" ? "block lg:hidden" : " "
                    }  w-full h-20 rounded-[10px]  cursor-pointer transition-all duration-300 ease-in-out font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny justify-center flex flex-col items-center ${
                        currentLocation.pathname === "/home" && item.id === "01"
                        ? " lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-accent-color to-variant-bg "
                        : " "
                    }`}
                    to={item?.link}
                    >
                        <span className=" text-xl mb-1">{item?.icon}</span> {item?.name}
                    </NavLink>
                ))}
                </ul>
            </nav>
        </header>
    )

}