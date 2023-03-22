import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";


export function SocialLinks() {

    return (
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
                <FaGithub />
              </span>
            </a>
          </div>
    )
}