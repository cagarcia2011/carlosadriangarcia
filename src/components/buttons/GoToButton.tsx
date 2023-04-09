import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type GoToButtonProps = {
    text: string,
    to: string,
    Icon?: IconType,
}

export function GoToButton({text, to, Icon}: GoToButtonProps) {

    return (
        <Link
            to={to}
            className="inline-flex w-[14rem] gap-2 items-center justify-center mx-auto bg-[#F3F6F6] dark:bg-[#212425] hover:bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition-scale ease-in-out hover:scale-105 px-8 py-3 text-lg text-gray-lite hover:text-white dark:text-[#A6A6A6] hover:dark:text-white rounded-full mt-6"
        >
            {Icon && <Icon className="text-4xl" />}
            {text}
        </Link>
    )
}