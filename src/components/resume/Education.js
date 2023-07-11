import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-6 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2> */}
        </div>
        <div>
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="International Institute of Information Technology, Hyderabad."
            result="8.57 CGPA"
            des="Pursuing B.Tech in Computer Science & Engineering."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Divine High School"
            result="99%"
            des="Completed Class 11th and 12th here."
          />
          <ResumeCard
            title="Primary & Secondary School"
            subTitle="Shree G.K. Dholakiya School"
            result="98%"
            des="Studied till class 10th."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education