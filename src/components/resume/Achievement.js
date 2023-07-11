import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col"
    >
      <div className="py-6 lgl:py-6 font-titleFont flex flex-col gap-4">
      </div>
        <div className="w-full h-1/5 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-7 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  JEE Mains Rank - 339
                </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 group flex" style={{marginTop:'20px'}}>
          <div className="w-10 h-[6px] bgOpacity mt-7 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  JEE Advanced Rank - 1610
                </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 group flex" style={{marginTop:'20px'}}>
          <div className="w-10 h-[6px] bgOpacity mt-7 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                Dean's List awardee for second semester
                </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 group flex" style={{marginTop:'20px'}}>
          <div className="w-10 h-[6px] bgOpacity mt-7 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                Specialist at Codeforces
                </h3>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default Achievement;
