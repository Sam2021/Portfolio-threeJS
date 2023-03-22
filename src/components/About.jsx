import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";


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
        I am a front-end developer with skills of React, Node.js, and Three.js 
        as well as TypeScript and JavaScript experience. I pick things up quickly 
        and work on it to develop effective, scalable, and user-friendly 
        solutions that address challenges in the real world. Together with that, I 
        have 1.5 years of experience as a manual QA tester. I am excellent at locating
        errors and flaws in software programmes and coordinating easily with QA and Development 
        to find quick fixes.
        <br/>
        <br/>
        Please find linkdin and Github link below
        <br/>
        <br/>
        <p className="social-container">
        <a
          href="https://www.linkedin.com/in/smit-parikh-b7684a168/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/Sam2021" className="twitter social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
