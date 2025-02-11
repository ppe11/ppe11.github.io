import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets /assets'

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

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl'>
                {infoList.map(({ icon, iconDark, title, description }, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={icon} alt={title} className='w-7 mt-3' />
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-3 text-gray-700 font-Ovo dark:text-white text-xl'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <Image src={tool.src} alt='Tools' className='w-5 sm:w-7' />
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
