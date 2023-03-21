import { ContactForm } from "./ContactForm";

import { Footer, PageTitle } from '../../components';


export const Contact = () => {
    return (
        <>
            <PageTitle title="Contact"/>
            <section id="contact">
                <div className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
                    {/* Contact page title */}
                    <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
                    Contact
                    </h2>
                    <ContactForm condition={true} />
                    <Footer bg={"#F8FBFB"} condition={false}/>
                </div>
            </section>
        </>
    )
}