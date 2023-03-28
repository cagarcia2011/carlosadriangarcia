import { PersonalInformation, Greeting, Avatar, TechStack } from "../../components"
import { DownloadButton, GoToButton } from "../../components/buttons";
import Resume from '../../assets/resume/Carlos-Garcia-Resume-03-23.pdf'
import { RiContactsBookLine } from "react-icons/ri";

export const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[6rem] md:mt-[220px] lg:mt-0 ">
        <Avatar absolute={true} width="260px" />
        {/* Social card */}
        <div className="pt-[4em] lg:pt-[7rem] pb-8">
          <Greeting />

          <div className="flex flex-col gap-5">
            <TechStack />
          </div>

          {/* personal information */}
          <PersonalInformation />
          <div className="flex flex-col">
            <GoToButton to="/contact" text="Contact Me" Icon={RiContactsBookLine} />
            <DownloadButton href={Resume} text="CV" />
          </div>
        </div>
      </div>
    </div>
  )
}