import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Power BI and Full-stack developer with expertise in
        frameworks like React, Node.js. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <a
          className={styles.sectionSubText}
          href="https://www.linkedin.com/in/bogdan-vozniy/details/recommendations"
        >
          <span style={{ textDecoration: "underline", color: "red" }}>
            My Power BI blog
          </span>
        </a>
        <br />
        My blog about Data Analyst is a source of valuable knowledge and
        fascinating stories from the field. I showcase Power BI tricks and Power
        BI + AI, share the best practices and strategies that will help you
        become an expert in data analytics.
        <a
          className={styles.sectionSubText}
          href="https://www.linkedin.com/in/bogdan-vozniy/details/recommendations"
        >
          <br /> <br />
          <span style={{ textDecoration: "underline", color: "blue" }}>
            My Software developer blog
          </span>
        </a>
        <br />
        In my software development blog, I not only showcase my skills and
        experience with software development technologies, but also share best
        practices, examples and story from real projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
