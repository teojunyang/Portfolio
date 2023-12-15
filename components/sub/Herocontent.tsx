"use client";

import React from "react";
import { motion } from "framer-motion";
import TypeWritter from "typewriter-effect";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

const Typewriter = dynamic(
  () => import('typewriter-effect'),
  { ssr: false }
);

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Know more about me
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <span className="text-white text-5xl ">
            Hello, I&apos;m{" "} 
            <span className="text-transparent bg-clip-text sm:text-6xl md:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Jun Yang
             </span>
            </span>
              <span className="text-5xl">―――――――――――
              <TypeWritter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString(`<span style="color:#FF77FF">Undergraduate Student</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span style="color:#9E7BFF">Malaysian</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span style="color:#893BFF">Front-End Developer</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span style="color:#FF77FF">Software Engineer</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .start();

                }}
              ></TypeWritter>
              </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m currently a computer science student in Malaysia,
          'To be or not to be. That is a question.'
          This famous line by Shakespeare often echoes in my mind as I explore the realms of programming and software development,
          constantly reminded of the myriad of choices and paths available in this field.

        </motion.p>
        <motion.p
          variants={slideInFromLeft(1)}>
              <Link
                href="https://drive.google.com/file/d/1WBkwUeAi9iif6CNm4XO0vgprn4IocfDF/view?usp=sharing"
                className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-pink-500 hover:bg-pink-400">
                <span className="text-xl text-white">View my Resume</span>
              </Link>
        </motion.p>
      </div> 
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
              src="/profile2.png"
              alt="hero section"
              className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
