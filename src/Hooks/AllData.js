import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

// import { AiOutlineHome } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
// import { FiCodesandbox } from "react-icons/fi"
import { RiContactsBookLine } from "react-icons/ri"

import iconPhone from "../assets/contact/phone-call 1.png"
import iconEmail from "../assets/contact/email 1.png"
import iconMap from "../assets/contact/map 1.png"


const AllData = () => {
    const [check, setCheck] = useState(false)
    const [local, setLocal] = useState(localStorage.getItem("theme"))
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const themeValue = localStorage?.getItem("theme");

        if (!themeValue) {
            setCheck(false)
            localStorage.setItem("theme", "dark") //Default Theme
        } else {
            themeValue === "dark" && setCheck(false)
            themeValue === "light" && setCheck(true)
        }

        localStorage?.getItem("theme") === "dark" 
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }, [])

    const handleTheme = (value) => {
        if (value !== "dark" && value !== "light") {
            return
        }
        value === "dark"
            ? setCheck(false)
            : setCheck(true)
        localStorage.setItem("theme", value)
        setLocal(value)

        localStorage?.getItem("theme") === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }

    function NavLink({
        to,
        className,
        activeClassName,
        inactiveClassName,
        ...rest
    }) {
        let location = useLocation();
        let isActive = location.pathname === to;
        let allClassNames = 
            className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`)
        
        return <Link className={allClassNames} to={to} {...rest} />
    }

    const menuItems = [
        {
          id: "01",
          name: "About",
          link: "/",
          icon: <FaRegUser />,
        },
        {
          id: "02",
          name: "Resume",
          link: "/resume",
          icon: <CgNotes />,
        },
        // {
        //   id: "03",
        //   name: "Works",
        //   link: "/works",
        //   icon: <FiCodesandbox />,
        // },
        //For Blog Implementation
        // {
        //   id: "04",
        //   name: "Blogs",
        //   link: "/home/blogs",
        //   icon: <FaBlogger />,
        // },
        {
          id: "03",
          name: "Contact",
          link: "/contact",
          icon: <RiContactsBookLine />,
        },
      ];

      const skillsArray = [
        {
            id: 1,
            color: "#FF6464",
            name: "Javascript",
            number: "90"
        },
        {
            id: 2,
            color: "#FF6464",
            name: "React JS",
            number: "80"
        },
        {
            id: 3,
            color: "#FF6464",
            name: "HTML & CSS",
            number: "85"
        },
        {
            id: 4,
            color: "#FF6464",
            name: "Python",
            number: "95"
        },
        {
            id: 5,
            color: "#FF6464",
            name: "SQL",
            number: "80"
        }
      ]

      const educationArray = [
        {
            id: 1,
            data: "2014-2020",
            title: "Bachelor of Science in Mechanical Engineering",
            place: "University of Puerto Rico - Mayaguez Campus",
            gpa: "3.92",
            color: "#EEF5FA"
        }
      ]

      const experienceArray = [
        {
            id: 1,
            data: "2021-Present",
            title: "Manufacturing Engineer - Software Developer",
            place: "Boston Scientific",
            location: "Spencer, Indiana, US",
            color: "#EEF5FA"
        }
      ]

      const contactArray = [
        {
            id: 1,
            icon: iconPhone,
            title: "Phone ",
            item1: "+1(787) 597-8730",
            item2: "+1(787) 597-8730",
            bg: "#FCF4FF"
        },
        {
            id: 2,
            icon: iconEmail,
            title: "Email ",
            item1: "ca.garcia2011@gmail.com",
            item2: "ca.garcia2011@gmail.com",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
        {
            id: 3,
            icon: iconMap,
            title: "Address ",
            item1: "Bloomington, Indiana, US",
            item2: "Bloomington, Indiana, US",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
      ]

  return {
    local,
    check,
    handleTheme,
    NavLink,
    menuItems,
    educationArray,
    experienceArray,
    contactArray,
    skillsArray
  }
}

export default AllData