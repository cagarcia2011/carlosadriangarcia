import React from 'react'
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaGithubAlt,
} from "react-icons/fa";

import Resume from '../assets/resume/Carlos-Garcia-Resume-08-22.pdf'
import dowloadIcon from '../assets/icons/download.png'
import img from '../assets/about/avatar.png'

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={img}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
            Carlos Adrian Garcia
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            Engineer ~ Software Developer
          </h3>

          {/* Social Links */}

          <div className="flex justify-center space-x-3">
            {/* facebook link add here */}
            <a
              href="https://www.facebook.com/carlosadrian.garcia.98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1773EA]">
                <FaFacebookF />
              </span>
            </a>
            {/* twitter link add here */}
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1C9CEA]">
                <FaTwitter />
              </span>
            </a> */}
            {/* linkedin link add here */}
            <a
              href="https://www.linkedin.com/in/carlos-a-garcia32/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/cagarcia2011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1] ">
                <FaGithubAlt />
              </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-accent-color shadow-md">
                <FaMobileAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <p className="dark:text-white break-all">
                  {" "}
                  <a
                    className="hover:text-accent-color duration-300 transition"
                    href="tel:+1234567890"
                  >
                    +1(787) 597 8730
                  </a>
                </p>
              </div>
            </div>

            <div className="flex  border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <p className="dark:text-white break-all">
                  {" "}
                  <a
                    className="hover:text-accent-color duration-300 transition"
                    href="mailto:ibthemes21@gmail.com"
                  >
                    carlos.gi2022@protonmail.com
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

          <a
            href={Resume}
            download
            className="inline-flex items-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
          >
            <img src={dowloadIcon} alt="icon" className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeCard