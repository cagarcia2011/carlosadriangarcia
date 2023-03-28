import { RiCloseFill } from 'react-icons/ri'
import { useData } from "../hooks";
import { Modal } from "./Modal";

export function PrivacyPolicy() {
    const { setPrivacyPolicyIsOpen } = useData()

    const closePrivacyPolicy = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setPrivacyPolicyIsOpen(false)
    }

    return (
        <>
            <Modal label="Privacy Policy">
                <div className="lg:px-[2rem] lg:py-[1rem]">
                    <div className="flex justify-between items-baseline">
                        <h2 className="after-effect after:left-40 mb-5 text-lg">Privacy Policy</h2>
                        <a onClick={closePrivacyPolicy} className='visible hover:text-accent-color dark:hover:text-accent-color bg-primary-bg-light w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-lite dark:text-white dark:bg-primary-bg-dark text-2xl cursor-pointer transition-all duration-300 ease-in-out'>
                            <RiCloseFill className='rounded-full' />
                        </a>
                    </div>
                    <p className="text-gray-lite dark:text-color-910 leading-7 text-xs"> I, as the developer of this website, respect your privacy and I am committed to protecting your personal information. This privacy policy explains how this website collects, uses, and discloses information when you visit it.
                        <br />
                        <strong>Information this website collects:</strong><br />
                        This website uses Google Analytics to collect information about how visitors use the website. Google Analytics uses cookies to track website activity, such as the number of visitors, the pages they visit, and the time they spend on each page. This information is collected in an anonymous form and cannot be used to personally identify you.
                        <br />

                        <strong>How I use information:</strong><br />
                        I use the information collected by Google Analytics to analyze website traffic, identify popular pages, and improve overall website visibility for a better first impression on my qualifications as a developer. I do not share this information with any third-party entities.
                        <br />

                        <strong>Consent:</strong><br />
                        By using this website, you consent to the use of cookies for the purposes of Google Analytics as described in this privacy policy. You may choose to disable cookies in your browser settings or opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
                        <br />

                        <strong>Changes to this privacy policy</strong><br />
                        I may update this privacy policy from time to time to reflect changes in the data collection practices. I encourage you to review this page regularly for any updates.
                        <br />

                        <strong>Contact Me</strong><br />
                        If you have any questions or concerns about this privacy policy or my data collection practices, please contact me at ca.garcia2011@gmai.com.
                        <br />

                        Thank you for visiting my personal website.
                    </p>
                </div>
            </Modal>
        </>
    )
}