import { workData } from '@/assets /assets'
import { motion } from 'framer-motion';
import React from 'react';

const Projects = (isDarkMode) => {
  return (
    <div id='project' className='w-full px-[12%] py-10 scroll-mt-20 min-h-screen'>
      <h4 className='text-center text-5xl font-Ovo'>My Projects</h4>
      <p className='text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo'>
      A selection of projects demonstrating my work in full-stack and systems development.
Built with a focus on clarity, performance, and usability.
Continuously improved through learning and iteration.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-10 dark:text-black'>
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className='flex flex-col bg-white rounded-xl overflow-hidden shadow-md cursor-pointer'
          >
            {/* Project image */}
            <div
              className='w-full h-64 bg-no-repeat bg-cover bg-center'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            {/* Project content */}
            <div className='p-5'>
              <div className='flex justify-between items-start flex-wrap'>

                {/* Text & Tags */}
                <div className='flex flex-col max-w-[60%]'>
                  <h2 className='font-semibold text-xl mb-1'>{project.title}</h2>
                  <p className='text-sm text-gray-500 mb-3'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className='text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className='flex flex-col gap-2'>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-black px-4 py-2 rounded-full border transition bg-pink-200 hover:bg-pink-300 text-center mb-1 mt-1'
                    >
                      Visit Live
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm px-4 py-2 rounded-full border border-gray-700 text-gray-700 hover:bg-pink-200 duration-500 text-center'
                    >
                      View GitHub
                    </a>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show more button */}
      <a
        href="#"
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
        border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white 
        dark:border-white dark:hover:bg-darkHover'
      >
        Show more
      </a>
    </div>
  );
};

export default Projects;
