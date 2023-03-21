import { useState, useEffect, ReactNode } from "react"

import { Link, useLocation } from "react-router-dom"

import { FaRegUser } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { RiContactsBookLine } from "react-icons/ri"

export type DataReturnType = ReturnType<typeof data>

export const data = () => {
    const [check, setCheck] = useState(false)
    const [local, setLocal] = useState(localStorage.getItem("theme"))
    useEffect(() => {
        const themeValue = localStorage?.getItem("theme");

        if (!themeValue) {
            setCheck(true)
            localStorage.setItem("theme", "light") //Default Theme
        } else {
            themeValue === "dark" && setCheck(false)
            themeValue === "light" && setCheck(true)
        }

        localStorage?.getItem("theme") === "dark" 
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }, [])

    const handleTheme = (value : string) => {
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
            name: "JavaScript",
            number: "90"
        },
        {
            id: 9,
            color: "#FF6464",
            name: "TypeScript",
            number: "75"
        },
        {
            id: 2,
            color: "#FF6464",
            name: "React",
            number: "80"
        },
        {
            id: 3,
            color: "#FF6464",
            name: "Vue",
            number: "60"
        },
        {
            id: 4,
            color: "#FF6464",
            name: "Node.js",
            number: "70"
        },
        {
            id: 5,
            color: "#FF6464",
            name: "HTML & CSS",
            number: "85"
        },
        {
            id: 6,
            color: "#FF6464",
            name: "Python",
            number: "95"
        },
        {
            id: 7,
            color: "#FF6464",
            name: "SQL",
            number: "80"
        },
        {
            id: 8,
            color: "#FF6464",
            name: "UI Design",
            number: "60"
        }
      ]

      const educationArray = [
        {
            id: 2,
            date: "2022-In Progreess",
            title: "Professional Certification - Computer Science",
            place: "Codecademy.com",
            color: "#EEF5FA"
        },
        {
            id: 3,
            date: "2022-2023",
            title: "Professional Certification - Front-End Engineer",
            place: "Codecademy",
            color: "#EEF5FA",
            link: "https://www.codecademy.com/profiles/CarlosAdrianGarcia/certificates/2682884a0719474f96407efe432fdd87"
        },
        {
            id: 1,
            date: "2014-2020",
            title: "Bachelor of Science in Mechanical Engineering",
            place: "University of Puerto Rico - Mayaguez Campus",
            gpa: "3.92",
            color: "#EEF5FA"
        },
      ]

      const experienceArray = [
        {
            id: 1,
            date: "2021-Present",
            title: "Manufacturing Engineer - Software Developer",
            place: "Boston Scientific",
            location: "Spencer, Indiana, US",
            color: "#EEF5FA"
        },
        {
            id: 2,
            date: "2020-2021",
            title: "Validation Engineer",
            place: "FITS, LLC, Contract with Bristol-Myers Squibb",
            location: "Manati, Puerto Rico, US",
            color: "#EEF5FA"
        }
      ]

      const contactArray = [
        {
            id: 1,
            title: "Phone ",
            item1: "+1(812) 361-8052",
            item2: "+1(812) 361-8052",
            bg: "#FCF4FF"
        },
        {
            id: 2,
            title: "Email ",
            item1: "ca.garcia2011@gmail.com",
            item2: "ca.garcia2011@gmail.com",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
        {
            id: 3,
            title: "Address ",
            item1: "Bloomington, Indiana, US",
            item2: "Bloomington, Indiana, US",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
      ]

      const knowledges = [
        "Web Development",
        "Project Management",
        "Git & GitHub",
        "Linux",
        "MS Power Platform Apps",
        "Data Science",
        "Debugging & Troubleshooting",
        "C# & .NET"
      ]

  return {
    local,
    check,
    handleTheme,
    menuItems,
    educationArray,
    experienceArray,
    contactArray,
    skillsArray,
    knowledges
  }
}