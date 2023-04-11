import { Footer, PageTitle } from '../../components'
import { HomeCard } from '../home/HomeCard';
import { useData } from '../../hooks';
import { useEffect } from 'react';

const AboutMeParagraph = () => {

  return (
    <p className="text-gray-lite  dark:text-color-910 leading-7">
      I'm a highly skilled Software Engineer specializing in Front-End Development.
      With a passion for creating intuitive and visually stunning user interfaces, I strive to deliver engaging and seamless user experiences.
      <br /><br />With a strong foundation in HTML, CSS, JavaScript, and various front-end frameworks, I am adept at building scalable, responsive, cross-browser-compatible web applications.
      My strong problem-solving abilities, attention to detail, and ability to work collaboratively make me a valuable asset to any team.
      <br /><br />
      I'm always eager to learn new technologies and hone my skills to build more innovative user interfaces. When I'm not coding, you can find me on the basketball court, cheering on my favorite teams, or catching up on the latest sports news. And let's not forget my love for coffee; there's nothing quite like the aroma of freshly brewed coffee to kickstart my day and get those creative juices flowing.
    </p>
  )
}

export const About = () => {
  const { avatars, handleImageChange } = useData()

  useEffect(() => {
    handleImageChange(false, avatars.idea)
  }, [])
  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden mb-[2rem]">
        <div>
          <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <div>
                <HomeCard />
              </div>
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden px-6">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <AboutMeParagraph />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <AboutMeParagraph />
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