import { motion } from "framer-motion";

import { styles } from "../styles";
import { gem } from "../assets";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center sm:mt-28 mt-40">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-40 h-30 violet-gradient" />
        </div>

        <div className="sm:mt-28 mt-40">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Moaad Msellek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm Front-end Software Engineer. I develop user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-xl bg-[#915EFF] text-white font-bold shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 transition-shadow"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl border-2 border-[#915EFF] text-[#915EFF] font-bold hover:bg-[#915EFF]/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
          <SocialLinks variant="compact" />
        </div>
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ height: "480px" }}
          src={gem}
          alt="3D developer illustration"
          fetchPriority="high"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-white/70 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
