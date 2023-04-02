import { useState, useEffect, ReactNode, useCallback } from "react"

import { Link, useLocation } from "react-router-dom"

import { FaRegUser } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { RiContactsBookLine } from "react-icons/ri"

import avatarIdea from '../assets/about/avatar-idea.png'
import avatarCoding from '../assets/about/avatar-coding.png'
import avatarFist from '../assets/about/avatar-fist.png'
import avatarSuccess from '../assets/about/avatar-success.png'
import avatarGreatness from '../assets/about/avatar-greatness.png'
import { FiCodesandbox } from "react-icons/fi"

export type DataReturnType = ReturnType<typeof data>

export const data = () => {
    const [check, setCheck] = useState(false)
    const [local, setLocal] = useState(localStorage.getItem("theme"))
    const [currentImgSelection, setCurrentImgSelection] = useState(avatarIdea)
    const [privacyPolicyIsOpen, setPrivacyPolicyIsOpen] = useState(false)

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

    const avatars = {
        idea: avatarIdea,
        coding: avatarCoding,
        fist: avatarFist,
        success: avatarSuccess,
        greatness: avatarGreatness
    }

    const handleImageChange = useCallback((isRandom : boolean = true, selection : string = '') => {

        if (isRandom) {
            setCurrentImgSelection((prev) => {
                const keyArray = Object.keys(avatars).filter(key => avatars[key] !== prev)
                const randomKeyIdx = Math.floor(Math.random() * keyArray.length)
                const randomKey = keyArray[randomKeyIdx]
                return avatars[randomKey]
              })
              return;
        }

        if (selection) {
            setCurrentImgSelection(selection)
            return;
        }

    }, []
)   

    // Menu Items

    const menuItems = [
        {
          id: "01",
          name: "About",
          link: "/",
          icon: <FaRegUser />,
        },
        {
          id: "02",
          name: "Projects",
          link: "/projects",
          icon: <FiCodesandbox />,
        },
        {
          id: "03",
          name: "Resume",
          link: "/resume",
          icon: <CgNotes />,
        },
        {
          id: "04",
          name: "Contact",
          link: "/contact",
          icon: <RiContactsBookLine />,
        },
      ];

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

  return {
    local,
    check,
    handleTheme,
    menuItems,
    educationArray,
    experienceArray,
    contactArray,
    avatars,
    handleImageChange,
    currentImgSelection,
    privacyPolicyIsOpen,
    setPrivacyPolicyIsOpen
  }
}