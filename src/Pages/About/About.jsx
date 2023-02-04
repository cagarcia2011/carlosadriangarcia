import React from 'react'

// import UseData from '../../Hooks/UseData'
import { HomeCard, Footer, PageTitle } from '../../Share'
// import  { AboutCard } from './AboutCard'

import '../../Share/Styles.css'

const About = () => {
    // const { local } = UseData()
  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden ">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                    I am a creative, enthusiastic, and innovative Engineer and self-taught Software developer 
                    with a background in Manufacturing, Python development and Web development. 
                    Excellent at collaborating in a multifunctional team environment to reach project goals and deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  I am a creative, enthusiastic, and innovative Engineer and self-taught Software developer 
                    with a background in Manufacturing, Python development and Web development. 
                    Excellent at collaborating in a multifunctional team environment to reach project goals and deliverables.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}
{/* 
          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {//Experience information 

              {serviceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))} }
            </div>
          </div> */}
          {/* service provide end */}

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* Slick Slider call here  */}
            {/* <SliderCommon /> */}
          </div>

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} />
        </div>
      </div>
    </section>
  )
}

export default About