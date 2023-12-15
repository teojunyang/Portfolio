"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-4xl text-white font-medium mt-6 mb-3 text-center'
      >
        Skills
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-lg text-gray-200 mb-10 text-center'
      >
        - Overview of my skills -
      </motion.div>
    </div>
  )
}

export default SkillText
