import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets /assets'

const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 min-h-screen'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-36 my-20 mx-100'>
        <div className='w-80 sm:w-96 rounded-3xl max-w-none'>
            <Image src={assets.profile_img} alt='user-image' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-8 max-w-2xl font-Ovo text-xl'>I am a second-year Software Systems student at Simon Fraser University, eager to expand my knowledge 
                and skills in software development. I am passionate about learning more about full-stack development, system design, and working on innovative projects that solve real-world problems.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
