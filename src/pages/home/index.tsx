import { useEffect, useState } from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'

import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
import { FiMoon, FiSun } from "react-icons/fi"

import { HomeCard } from './HomeCard';
import { PageTitle, DesktopNav, NavLink, PrivacyPolicy, SocialLinks } from '../../components'

import { useData } from '../../hooks'
import logo from '../../assets/logo/logo.png'
import CookieConsent from 'react-cookie-consent'

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleTheme, check, menuItems, setPrivacyPolicyIsOpen, local } = useData();
  const a = useLocation();
  const handle = (e: string) => {
    handleTheme(e);
  };

  const openPrivacyPolicy = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setPrivacyPolicyIsOpen(true)
  }

  useEffect(() => {
    if (menuOpen) {
      setPrivacyPolicyIsOpen(false)
    }
  }, [menuOpen])
  return (
    <main className={`relative`}>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <section className="z-[100] bg-white dark:bg-black min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <div className={`container z-[1000] w-full bg-primary-bg-light dark:bg-primary-bg-dark lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[35px]`}>
          <div className={`w-full z-[1000] flex justify-between items-center px-4`} data-aos="fade-down">
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
                  className="lg:hidden hover:text-accent-color dark:hover:text-accent-color bg-primary-bg-light w-[40px] h-[40px] rounded-full flex justify-center items-center text-gray-lite dark:text-white dark:bg-primary-bg-dark text-3xl ml-3 cursor-pointer transition-all duration-300 ease-in-out "
                >
                  <BiMenuAltRight className='rounded-full' />
                </span>
              ) : (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:opacity-0 hover:text-accent-color dark:hover:text-accent-color lg:invisible visible opacity-100  bg-primary-bg-light w-[40px] h-[40px] rounded-full flex justify-center items-center text-gray-lite dark:text-white dark:bg-primary-bg-dark text-3xl ml-3 cursor-pointer transition-all duration-300 ease-in-out "
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
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-auto sticky" data-aos="fade-right">
            <HomeCard />
          </div>
          <div className="col-span-12 lg:col-span-8  ">
            {/* header  */}
            <DesktopNav />

            {/* Content */}
            <Outlet />
          </div>
        </div>
      </section>
      <div data-aos="fade-up" className='socialSm:fixed hidden socialSm:flex flex-col items-center bg-transparent button-vertical-after after:h-40 after:translate-y-[7rem] bottom-0 left-0 w-[10%] h-[25%]'>
        <SocialLinks />
      </div>
      <PrivacyPolicy />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        style={{ background: local === "dark" ? "#111111" : "#f3f6f6" }}
        buttonStyle={{ color: local === "dark" ? "#a6a6a6" : "#44566c", background: local === "dark" ? "#212425" : "#22b8cf", borderRadius: "5px" }}
        expires={150}>
        <p className='text-gray-lite dark:text-color-910 leading-2 lg:leading-6 text-xs'>
          <span className='hidden lg:inline'>This website uses cookies to track activity, such as the number of visitors, the pages they visit, and the time they spend on each page. This information is collected in an anonymous form and cannot be used to personally identify you.{" "}</span>
          By using this website, you consent to the use of cookies for the purposes of Google Analytics as described in the{" "}
          <a
            className="text-accent-color dark:text-accent-color hover:text-gray-lite dark:hover:text-accent-light transition-all duration-300 ease-in-out cursor-pointer"
            onClick={openPrivacyPolicy}
          >
            Privacy Policy
          </a>.
        </p>
      </CookieConsent>
    </main>
  )
}

