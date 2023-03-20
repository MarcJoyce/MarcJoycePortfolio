import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>

      <div className='w-full h-[360px]'>
        <BallCanvas data={technologies} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");