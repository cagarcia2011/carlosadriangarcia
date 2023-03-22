import { useState } from "react";
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaGithubAlt,
} from "react-icons/fa";

import { SocialLinks, PersonalInformation, Greeting, Avatar } from "../../components"
import { DownloadButton } from "../../components/buttons";
import Resume from '../../assets/resume/Carlos-Garcia-Resume-03-23.pdf'

export const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <Avatar />
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