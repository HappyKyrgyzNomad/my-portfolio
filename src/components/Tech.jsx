import React from "react";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard1 = ({ name, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring")}
      className="w-full green-pink-gradient p-[1px] rounded-[200px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[200px] py-5 px-12 min-h-[28px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);
const Tech = () => {
  return (
    <motion.div>
      <h1 className="text-white text-[20px] font-bold text-center mb-20">
        My stacks
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <ServiceCard1 key={technology.name} {...technology} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
