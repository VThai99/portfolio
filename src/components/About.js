import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import data from "../Data/data.json";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Front-end Developer with over 2 years of experience
            </h3>
            <div className="mb-2">
              <span className="text-white/50">Full Name: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.fullName}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-white/50">Date Of Birth: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.DOB}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-white/50">Gender: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.gender}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-white/50">Address: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.address}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-white/50">Phone: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.phone}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-white/50">Email: </span>{" "}
              <span className="text-cyan-400 text-[25px] ml-1">
                {data.about.Email}
              </span>
            </div>
            <p className="mb-6">
              Take advantage of code skills, experience and understanding of
              information technology to become a professional developer. From
              that, I will contribute to the development of your company.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  <span className="relative top-[-5px] text-white">+</span>
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Joined
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={17} duration={3} /> : null}
                  <span className="relative top-[-5px] text-white">+</span>
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
