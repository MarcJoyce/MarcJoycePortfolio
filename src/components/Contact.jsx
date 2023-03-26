import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { github, linkedin } from "../assets";

const Contact = () => {
return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex mx-auto justify-center mt-8 gap-10">
          <a href="https://www.linkedin.com/in/marcjoyce501/" target="_blank" rel="noreferrer">
            <img className="h-24 w-24" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/MarcJoyce/" target="_blank" rel="noreferrer">
            <img className="h-24 w-24" src={github} alt="GitHub" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
