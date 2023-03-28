import { Footer, PageTitle } from '../../components'
import { HomeCard } from '../home/HomeCard';
import { useData } from '../../hooks';
import { useEffect } from 'react';

export const About = () => {
  const { avatars, handleImageChange } = useData()

  useEffect(() => {
    handleImageChange(false, avatars.idea)
  }, [])
  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden">
        <div>
          <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 data-aos="fade-left" className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <div data-aos="fade-right">
                <HomeCard />
              </div>
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden px-6" data-aos="fade-up">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I am a creative, innovative, task-driven professional with a diverse Engineering background. My curiosity in technology and my drive to learn sparked a passion in Software Development. <br /><br />
                      My diverse experience in Manufacturing, Validation and Projects gives me the ability to adapt quickly and confidently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden " data-aos="fade-up">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    I am a creative, innovative, task-driven professional with a diverse Engineering background. My curiosity in technology and my drive to learn sparked a passion in Software Development. <br /><br />
                    My diverse experience in Manufacturing, Validation and Projects gives me the ability to adapt quickly and confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          {/* Common Footer call here */}
          <div className='pb-10'>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}