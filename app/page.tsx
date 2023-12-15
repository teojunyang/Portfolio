"use client";
import Aboutme from '@/components/main/Aboutme'
import Combined from '@/components/main/Combined';
import Contact from '@/components/main/Contact';
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Footer from '@/components/main/Footer';


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Aboutme />
        <Skills />
        <Combined />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
