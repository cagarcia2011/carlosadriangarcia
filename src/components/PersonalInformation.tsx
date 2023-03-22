import { FaMobileAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


export function PersonalInformation() {

    return (
        <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <a href="tel:+18123618052" className="cursor-pointer">
                    <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-accent-color shadow-md">
                        <FaMobileAlt />
                    </span>
                </a>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        Phone
                    </p>
                    <p className="dark:text-white break-all">
                        {" "}
                        <a
                            className="hover:text-accent-color duration-300 transition"
                            href="tel:+18123618052"
                        >
                            +1 (812) 361 8052
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex  border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <a href="mailto:ca.garcia2011@gmail.com" className="cursor-pointer">
                    <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                        <FaEnvelopeOpenText />
                    </span>
                </a>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        Email
                    </p>
                    <p className="dark:text-white break-all">
                        {" "}
                        <a
                            className="hover:text-accent-color duration-300 transition"
                            href="mailto:ca.garcia2011@gmail.com"
                            >
                            ca.garcia2011@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-accent-color shadow-md">
                    <FaMapMarkerAlt />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        Location
                    </p>
                    <p className="dark:text-white break-all">Bloomington, Indiana, US</p>
                </div>
            </div>

            <div className="flex  py-2.5">
                <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-accent-color shadow-md">
                    <FaCalendarAlt />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        Birthday
                    </p>
                    <p className="dark:text-white break-all">July 12, 1996</p>
                </div>
            </div>
        </div>
    )
}