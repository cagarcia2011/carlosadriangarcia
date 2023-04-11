import { ContactForm } from "./ContactForm";

import { Footer, PageTitle } from '../../components';
import { useEffect } from "react";
import { useData } from "../../hooks";
import { Avatar } from "../../components";


export const Contact = () => {
    const { avatars, handleImageChange } = useData()
    useEffect(() => {
        handleImageChange(false, avatars.fist)
    }, [])
    return (
        <>
            <PageTitle title="Contact" />
            <section id="contact" className="lg:mb-20 overflow-hidden">
                <div className="relative w-full flex items-center justify-center">
                    <div className="lg:hidden absolute z-10 top-[10rem] w-[200px]">
                        <Avatar absolute={false} width="200px" />
                    </div>
                </div>
                <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
                    {/* Contact page title */}
                    <h2 className="after-effect after:left-60 after:top-[76px] mt-[12rem] lg:mt-0 mb-12 lg:mb-6 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
                        Contact
                    </h2>

                    <ContactForm condition={true} />
                    <div className="pb-8">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}