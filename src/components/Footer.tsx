import { useData } from "../hooks";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {

    const { setPrivacyPolicyIsOpen } = useData()

    const openPrivacyPolicy = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setPrivacyPolicyIsOpen(true)
    }

    return (
        <footer
        className="overflow-hidden rounded-b-2xl bg-transparent border-t-2 border-t-accent-light dark:border-t-[#212425]"
        >
        <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
            © 2023 All Rights Reserved by{" "}
            <a
            className="hover:text-accent-color duration-300 transition"
            href="https://carlosadriangarcia.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Carlos Adrian Garcia
            </a>
            .
            | {" "}
            <a
                className="text-gray-lite dark:text-gray hover:text-accent-color dark:hover:text-accent-color transition-all duration-300 ease-in-out cursor-pointer"
                onClick={openPrivacyPolicy}
                >
                Privacy Policy
            </a>
        </p>

        </footer>
    )
}