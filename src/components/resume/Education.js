import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1995 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BEngr in Electrical & Electronics Engineering"
            subTitle="University of Abeokuta Nigeria (2012 - 2018)"
            result="3.90/4"
            des="Completed a comprehensive program in Electrical & Electronics Engineering, providing a strong foundation in both theoretical and practical aspects of the field."
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education focusing on science and information, preparing students for advanced studies or specialized careers."
          /> */}
          <ResumeCard
            title="Secondary School Education"
            subTitle="Lizben Private College (2004 - 2010)"
            result="5.00/5"
            des="Completed secondary education, acquiring fundamental knowledge and skills necessary for further academic and professional pursuits."
          />
        </div>
      </div>
      {/* Job Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Altpower Technology - (2023 - Present)"
            result="Nigeria"
            des="Leading software development projects, collaborating with diverse teams, and contributing to innovative solutions in a dynamic tech environment."
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="Subbs Developer Team - (2012 - 2016)"
            result="Nigeria"
            des="Developed full-stack web applications, working across various technologies and frameworks to deliver robust and scalable solutions."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Widefire - (2020 - 2021)"
            result="Nigeria"
            des="Designed and developed web solutions while also training new developers, sharing expertise, and mentoring team members to enhance their skills."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
