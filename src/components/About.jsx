import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {cv} from "../assets"
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
       I am Moaad Msellek, a dedicated front-end engineer with more than 5 years of
       experience in developing robust and user-friendly web applications. Skilled in React.js, Next.js, and Angular,
       I specialize in translating complex concepts into clean, efficient, and scalable code. My diverse experience
       enables me to consistently deliver high-quality solutions that exceed client expectations.
       I am a strong problem-solver and collaborative team player, continuously updating my skills to align with the latest industry trends.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br /> <br /> <br />
      <div className='flex justify-center gap-10'>
      <h3 className={styles.sectionCvText}>My CV : </h3>
 <a
  href={cv}
  download="Moaad_Msellek_CV.pdf"
  class="inline-flex items-center     gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white font-medium shadow-lg transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300/40 active:scale-100"
  aria-label="Download report"
>
   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>

  <span>Download</span>
</a>
      </div>
   
    </>
  );
};

export default SectionWrapper(About, "about");
