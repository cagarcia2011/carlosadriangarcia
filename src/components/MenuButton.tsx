import { BiMenuAltRight } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"

interface MenuButtonProps {
    menuOpen: boolean,
    setMenuOpen: (state: boolean) => void
}

export const MenuButton = ({ menuOpen, setMenuOpen }: MenuButtonProps) => {


    return (
        <>
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
        </>
    )
}