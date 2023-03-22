import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaGithubAlt,
} from "react-icons/fa";

import { SocialLinks, PersonalInformation, Greeting } from "../../components"
import { DownloadButton } from "../../components/buttons";
import Resume from '../../assets/resume/Carlos-Garcia-Resume-03-23.pdf'
import img from '../../assets/about/avatar.png'

export const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={img}
          className="w-[260px] absolute left-[50%] transform -translate-x-[50%] h-auto drop-shadow-black mx-auto rounded-lg -mt-[140px] dark:drop-shadow-white"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <Greeting />

          <SocialLinks />

          {/* personal information */}
          <PersonalInformation />
          <DownloadButton href={Resume} text="CV" />
        </div>
      </div>
    </div>
  )
}