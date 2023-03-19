import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { AiOutlineLink } from 'react-icons/ai';
import { useData } from "../../hooks/useData";

export const ResumeCard = () => {
    const { educationArray, experienceArray } = useData();

    return (
        <>
            <div>
                {/* <!-- Experience contain --> */}
                <div className="flex items-center space-x-2 mb-4">
                    <div className="text-6xl text-accent-color">
                        <MdOutlineSchool />
                    </div>
                    <h4 className="text-5xl dark:text-white font-medium"> Experience </h4>
                </div>

                {experienceArray.map((item) => (
                    <div
                        className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#EEF5FA] border-2 dark:border-[#212425] dark:border-2"
                        style={{
                            background: "transparent",
                        }}
                        key={item.id}
                    >
                        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                            {item.date}
                        </span>
                        <h3 className="text-xl dark:text-white"> {item.title} </h3>
                        <p className="dark:text-[#b7b7b7]">{item.place}</p>
                        <p className="dark:text-[#b7b7b7]">{item.date}</p>
                    </div>
                ))}
            </div>
            {/*Education*/}
            <div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="text-6xl text-accent-color">
                        <MdOutlineBusinessCenter />
                    </div>
                    <h4 className="text-5xl dark:text-white font-medium"> Education </h4>
                </div>
                {/* end flex */}

                {educationArray.map((item) => (
                    <div
                        className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#EEF5FA] border-2 dark:border-[#212425] dark:border-2"
                        style={{
                            background: "transparent",
                        }}
                        key={item.id}
                    >
                        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                            {item.date}
                        </span>
                        <h3 className="text-xl dark:text-white"> {item.title} </h3>
                        <p className="dark:text-[#b7b7b7]">{item.place}</p>
                        {
                            item.gpa && <p className="dark:text-[#b7b7b7]">GPA: {item.gpa}</p>
                        }
                        {
                            item.link && <a target="_blank" rel="noreferrer" href={item.link} className="text-s flex gap-2 items-center justify-center rounded-full bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-white">Show credential<span><AiOutlineLink /></span></a>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}