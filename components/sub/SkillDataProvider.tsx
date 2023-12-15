"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    skill_name: string; // Include the skill_name in the Props
    index: number;
  }
  
  const SkillDataProvider = ({ src, width, height, skill_name, index }: Props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });
  
    const imageVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    const animationDelay = 0.3;
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="flex items-center" // Use flex row layout
      >
        <Image src={src} width={width} height={height} alt="skill image" />
        <span className="text-white ml-2">{skill_name}</span>
      </motion.div>
    );
  };
  
  export default SkillDataProvider;