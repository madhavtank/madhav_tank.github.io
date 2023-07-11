import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs  } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail,SiCodeforces,SiInstagram } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/madhavtank">
            <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:madhav.tank@students.iiit.ac.in">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/madhav-tank-b471b8226/">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://codeforces.com/profile/madhav__">
              <SiCodeforces /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.instagram.com/madhav.tank.634/">
              <SiInstagram /></a>
            </span>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media