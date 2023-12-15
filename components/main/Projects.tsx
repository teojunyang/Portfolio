import React from 'react'
import ProjectsCard from '../sub/ProjectsCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <div 
      className='flex flex-col items-center justify-center py-20'
      id='projects'
      >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Project
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row px-10 gap-10 items-center justify-center'>
        <Link href="https://github.com/teojunyang/Portfolio" passHref>
          <ProjectsCard
            src='/portfolio.png'
            title='My Portfolio'
            description='This is my portfolio website that I built using Next.js and Tailwind CSS. I also used Framer Motion to add some animations to the website.'
          />
        </Link>
      </div>
        </div>
  )
}

export default Projects