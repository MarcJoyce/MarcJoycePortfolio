import React from "react";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div
      >
        <p className={styles.sectionSubText}>I drink coffee and I know things</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>
      <div
        className="mt-10 flex flex-row flex-wrap justify-center gap-10 items-center bg-tertiary sm:p-16 p-8 rounded-[20px]"
        style={{
          border: "1px solid #1a237e",
        }}
      >
        {technologies.map((tech) => {
          return (
            <div
              key={tech.name}
              className="sm:w-24 sm:h-24 w-16 h-16 flex flex-col justify-center"
            >
              <img src={tech.icon} alt={tech.name} className='w-full h-full' style={ tech.name === 'Three JS' && {filter:'invert(100%) sepia(0%) saturate(100%) hue-rotate(180deg) brightness(100%) contrast(100%)'}}/>
              <p className={`mx-auto text-[12px] sm:text-[16px] whitespace-nowrap`} >
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
