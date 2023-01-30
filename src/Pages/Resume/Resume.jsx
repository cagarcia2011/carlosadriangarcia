import React from 'react'

import UseData from '../../Hooks/UseData'
import LineItem from './LineItem'
import ResumeCard from './ResumeCard'
import { Footer, PageTitle } from '../../Share'

const Resume = () => {
    const { skillsArray } = UseData()
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

          <div className="container bg-transparent dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
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
                  <button className="resume-btn">Web Development</button>
                  <button className="resume-btn">Project Management</button>
                  <button className="resume-btn">Git & GitHub</button>
                  <button className="resume-btn">Linux</button>
                  <button className="resume-btn">MS Power Platform Apps</button>
                  <button className="resume-btn">Data Science</button>
                  <button className="resume-btn">Debugging & Troubleshooting</button>

                </div>
              </div>

              {/* knowledge section end */}
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