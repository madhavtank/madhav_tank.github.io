import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Student.", "Competitive Programmer.", "Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hi 👀🙋‍♂️,  </h4>
        <h1 className="text-6xl font-bold text-white">
        I'm <span className="text-designColor capitalize">Madhav Tank</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a third year Computer Science & Engineering student at IIIT Hyderabad. I have explored the fields of Competitive Programming and Web Development.
        I am enthusiastic about ML and AI. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner