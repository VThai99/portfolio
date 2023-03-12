import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import data from '../Data/data.json'
const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-service lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 rounded-[25%]"
          >
            <h2 className="text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[445px] mb-16">
              I'm a programer with over 2 years of experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {data.services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-auto pb-4 flex mb-3"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[23px] tracking-wider font-primary font-semibold mb-6 text-white/70">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="linkto"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="linkto" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
