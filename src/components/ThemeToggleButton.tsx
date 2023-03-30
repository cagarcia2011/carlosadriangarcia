import { FiMoon, FiSun } from "react-icons/fi"
import { useData } from "../hooks"


export const ThemeToggleButton = () => {
    const { check, handleTheme } = useData()
    return (
        <>
            {check ? (
                <span
                    onClick={() => handleTheme("dark")}
                    className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-accent-color text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  "
                >
                    <FiSun className=" text-3xl " />
                </span>
            ) : (
                <span
                    onClick={() => handleTheme("light")}
                    className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-accent-color transition-all duration-300 ease-in-out cursor-pointer  "
                >
                    <FiMoon className="text-white text-3xl" />
                </span>
            )}
        </>
    )
}