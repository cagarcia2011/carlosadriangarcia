import CookieConsent from "react-cookie-consent"
import { useData } from "../hooks"

interface CookieConsentBannerProps {
    openPrivacyPolicy: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const CookieConsentBanner = ({ openPrivacyPolicy } : CookieConsentBannerProps) => {
    const { local } = useData()
    return (
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
    )
}