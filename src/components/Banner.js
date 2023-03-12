import React, { useEffect, useRef } from "react";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import data from "../Data/data.json";
const Banner = () => {
  const socialHandle = (link) => {
    window.open(link);
  };
  const refImg = useRef();
  const refImgChange = useRef();
  const imgHandle = (e) => {
    let currentPosition = e.clientX;
    let startPosition = refImg.current.offsetLeft;
    refImgChange.current.style.width = currentPosition - startPosition  + "px";
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:items-center lg:flex-row lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.5] lg:text-[111px]"
            >
              {data.banner.name}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 lg:text-[40px] text-white">
                Welcome to my portfolio
              </span>
              <div className="mt-2">
                <TypeAnimation
                  sequence={data.banner.typing_text}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {data.banner.introduce}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg"> Feature </button>
              <button className="btn btn-lg"> Feature </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <span
                onClick={() => socialHandle(data.banner.githubLink)}
                className="cursor-pointer hover:scale-125 transition-all duration-200"
              >
                <FaGithub />
              </span>
              <span
                onClick={() => socialHandle(data.banner.faceLink)}
                className="cursor-pointer hover:scale-125 transition-all duration-200"
              >
                <FaFacebookF />
              </span>
              <span
                onClick={() => socialHandle(data.banner.linkedinLink)}
                className="cursor-pointer hover:scale-125 transition-all duration-200"
              >
                <FaLinkedinIn />
              </span>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            onMouseMove={imgHandle}
            ref={refImg}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative lg:h-[517px]"
          >
            <div className="bg-avata h-full w-full absolute bg-no-repeat bg-cover rounded-3xl"></div>
            <div
              ref={refImgChange}
              className="bg-avatachange w-1/2 h-full absolute bg-no-repeat bg-cover rounded-3xl"
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
