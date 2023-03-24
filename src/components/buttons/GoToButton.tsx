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
            className="inline-flex w-[14rem] gap-2 items-center justify-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-in-out hover:bg-gradient-to-l hover:scale-105 px-8 py-3 text-lg text-white rounded-full mt-6"
        >
            {Icon && <Icon className="text-4xl" />}
            {text}
        </Link>
    )
}