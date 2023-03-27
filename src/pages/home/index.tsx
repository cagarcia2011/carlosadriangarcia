import { useState } from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'

import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
import { FiMoon, FiSun } from "react-icons/fi"

import { HomeCard } from './HomeCard';
import { PageTitle, DesktopNav, NavLink } from '../../components'

import { useData } from '../../hooks'
import logo from '../../assets/logo/logo.png'

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleTheme, check, menuItems } = useData();
  const a = useLocation();
  const handle = (e: string) => {
    handleTheme(e);
  };
  return (
    <main>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <section className="z-[100] bg-white dark:bg-black min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <div className="container z-[1000] w-full bg-primary-bg-light dark:bg-primary-bg-dark lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[35px]">
          <div className="w-full z-[1000] flex justify-between items-center px-4" data-aos="fade-down">
            {/* website logo */}

            <Link to="/">
              <img className="h-[26px] lg:h-[32px] rounded-md hover:scale-[105%] transition-all duration-50 ease-in-out" src={logo} alt="logo" />
            </Link>
            <div className="flex items-center">
              {/* dark and light mode button */}

              {check ? (
                <span
                  onClick={() => handle("dark")}
                  className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-accent-color text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiSun className=" text-3xl " />
                </span>
              ) : (
                <span
                  onClick={() => handle("light")}
                  className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiMoon className="text-white text-3xl" />
                </span>
              )}

              {/* mobile menu button */}

              {!menuOpen ? (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden bg-primary-bg-light w-[40px] h-[40px] rounded-full flex justify-center items-center text-gray-lite dark:text-white dark:bg-primary-bg-dark text-3xl ml-3 cursor-pointer transition-all duration-300 ease-in-out "
                >
                  <BiMenuAltRight className='rounded-full' />
                </span>
              ) : (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:opacity-0 lg:invisible visible opacity-100  bg-primary-bg-light w-[40px] h-[40px] rounded-full flex justify-center items-center text-gray-lite dark:text-white dark:bg-primary-bg-dark text-3xl ml-3 cursor-pointer transition-all duration-300 ease-in-out "
                >
                  <RiCloseFill className='rounded-full' />
                </span>
              )}
            </div>
          </div>
        </div>
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
                    } cursor-pointer  transition-all duration-100 ease-in-out  font-poppins font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  ${a.pathname === "/" && item.id === "01"
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
                onClick={() => handle("dark")}
                className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiMoon className="text-3xl" />
              </span>
            ) : (
              <span
                onClick={() => handle("light")}
                className="bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer "
              >
                <FiSun className="text-white text-3xl" />
              </span>
            )}
          </ul>
        </nav>
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[110px] ">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44" data-aos="fade-right">
            <HomeCard />
          </div>
          <div className="col-span-12 lg:col-span-8  ">
            {/* header  */}
            <DesktopNav />
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  )
}

