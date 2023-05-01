import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { myphoto } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, image }) => (
  <Tilt className="xs:w-[650px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
      >
        <img
          src={image}
          alt="My Photo"
          className="w-400 h-400 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const PhotoBlock = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center max-w-3xl">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>My photo</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {myphoto.map((myphoto, index) => (
            <ServiceCard key={myphoto.title} index={index} {...myphoto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(PhotoBlock, "PhotoBlock");
