import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

// import { AiOutlineHome } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
// import { CgNotes } from "react-icons/cg"
// import { FiCodesandbox } from "react-icons/fi"
import { RiContactsBookLine } from "react-icons/ri"


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
        // {
        //   id: "06",
        //   name: "Resume",
        //   link: "/resume",
        //   icon: <CgNotes />,
        // },
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
          id: "05",
          name: "Contact",
          link: "/contact",
          icon: <RiContactsBookLine />,
        },
      ];

  return {
    local,
    check,
    handleTheme,
    NavLink,
    menuItems
  }
}

export default AllData