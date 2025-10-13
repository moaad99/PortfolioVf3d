import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {gem} from "../assets"
const Hero = () => {
  return (
    <section className={`relative w-full h-screen  mx-auto`}>
      <div
        className={` inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center sm:mt-28 mt-40'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-30 violet-gradient' />
        </div>

        <div className="sm:mt-28 mt-40">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Moaad Msellek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm Front-end Software Engineer i develop user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
<div className=" flex    justify-center">
<img  style={{height:"480px"}}   src={gem} alt="" />    
</div>
</section>
  );
};

export default Hero;
