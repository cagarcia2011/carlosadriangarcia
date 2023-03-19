import { Footer, PageTitle } from '../../share'
import { HomeCard } from '../home/HomeCard';
import '../../share/Styles.css'

export const About = () => {
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
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden px-6">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I am a creative, innovative, task-driven professional with a diverse Engineering background. My curiosity in technology and my drive to learn sparked a passion in Software Development. <br/><br/>
                      My diverse experience in Manufacturing, Validation and Projects gives me the ability to adapt quickly and confidently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    I am a creative, innovative, task-driven professional with a diverse Engineering background. My curiosity in technology and my drive to learn sparked a passion in Software Development. <br/><br/>
                    My diverse experience in Manufacturing, Validation and Projects gives me the ability to adapt quickly and confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} condition={false}/>
        </div>
      </div>
    </section>
  )
}