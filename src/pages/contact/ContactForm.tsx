import { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useData } from '../../hooks'
import { SocialLinks } from '../../components'
import { AiOutlineLoading3Quarters, AiOutlineCheckCircle } from 'react-icons/ai'

type ContactFormProps = {
  condition: boolean
}

export const ContactForm = ({ condition }: ContactFormProps) => {
  const form = useRef();
  const { handleImageChange, avatars } = useData()
  const [inProgress, setInProgress] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInProgress(true)
    setEmailSent(false)
    emailjs
      .sendForm(
        "service_mulczjc",
        "template_wh4hgke",
        form.current,
        "HUV4r_gJoKFUBa6Cz"
      )
      .then(
        (result) => {
          setInProgress(false)
          setEmailSent(true)
          toast.success("Message Sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleImageChange(false, avatars.success)
          let myform: any;
          myform = document.getElementById("myForm");
          myform.reset();
        },
        (error) => {
          setInProgress(false)
          setEmailSent(false)
          toast.error("Ops Message not Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (emailSent) {
      timer = setTimeout(() => {
        setEmailSent(false)
      }, 2000)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
 
  }, [emailSent])
  return (
    <div
      className={`${condition
        ? "mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2"
        : "  dark:border-[#212425] dark:border-2 mb-16  md:p-[48px]  p-4  "
        } bg-transparent border-accent-light border-2 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]`}
    >
      <div data-aos="fade-right" className='w-full flex items-center justify-start my-10 socialSm:hidden button-horizontal-after after:w-40 after:left-[7rem]'>
        <SocialLinks />
      </div>
      <h3 className="text-4xl  ">
        <span className="text-gray-lite dark:text-[#A6A6A6] ">
          I'm always open to discussing opportunities
        </span>
        <br />
        <span className="font-semibold dark:text-white">
          development work or partnerships.
        </span>
      </h3>

      {/* Form Start */}
      <form id="myForm" ref={form} onSubmit={sendEmail}>
        <div className="relative  z-0 w-full mt-[40px] mb-8 group">
          <input
            type="text"
            name="name"
            className="block autofill:bg-transparent py-2.5 px-2 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-accent-color focus:outline-none focus:ring-0 focus:border-accent-color peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-color peer-focus:dark:text-accent-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            Name *
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="user_email"
            className="block autofill:text-red-900 needed py-2.5 px-2 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-accent-color focus:outline-none focus:ring-0 focus:border-accent-color peer"
            placeholder=" "
            id="user_email"
            required
          />
          <label
            htmlFor="user_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-color peer-focus:dark:text-accborder-accent-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            Email *
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <textarea
            name="message"
            className="block autofill:bg-yellow-200 py-2.5 px-2 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-accent-color focus:outline-none focus:ring-0 focus:border-varitext-variant-bg peer"
            placeholder=" "
            id="message"
            required
            rows={3}
          ></textarea>
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-variant-bg peer-focus:dark:text-accborder-accent-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            Message *
          </label>
        </div>

        <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-accent-color to-variant-bg rounded-lg  mt-3">
            <button
              type="submit"
              className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent w-[8rem] h-[3rem] rounded-lg border-[2px]  hover:text-white   dark:text-white flex items-center justify-center"
            >
              {
                inProgress
                ? <AiOutlineLoading3Quarters size={30} className='animate-spin' color='#fff' />
                :
                emailSent 
                ? <AiOutlineCheckCircle size={30} color='#fff' />
                : "Submit" 
              }
            </button>
        </div>
      </form>
    </div>
  )
}