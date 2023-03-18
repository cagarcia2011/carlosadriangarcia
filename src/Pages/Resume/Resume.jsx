import React from 'react'

import UseData from '../../Hooks/UseData'
import LineItem from './LineItem'
import ResumeCard from './ResumeCard'
import { Footer, PageTitle } from '../../Share'
import ResumeDoc from '../../assets/resume/Carlos-Garcia-Resume-03-23.pdf'
import dowloadIcon from '../../assets/icons/download.png'

const Resume = () => {
    const { skillsArray, knowledges } = UseData()
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-12 px-4 md:px-0">
              {/*Resume page title */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {/* resume items map */}
                <ResumeCard />
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="container bg-transparent dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
                  Relevant Skills
                </h4>
                {/* Experience percent element */}
                {skillsArray.map((item, i) => (
                  <LineItem item={item} key={i} />
                ))}
              </div>

              {/* knowledge section start */}

              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Knowledges
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  {
                    knowledges.map((knowledge, index) => (
                      <button className="resume-btn" key={index}>{knowledge}</button>
                    ))
                  }
                </div>
              </div>

              {/* knowledge section end */}
            </div>
            <div className='w-full justify-center items-center'>
                <a
                href={ResumeDoc}
                download
                className="lg:hidden w-[75%] flex items-center justify-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
              >
                <img src={dowloadIcon} alt="icon" className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
          {/* End .container */}

          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  )
}

export default Resume