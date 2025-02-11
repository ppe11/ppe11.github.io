import { workData } from '@/assets /assets'
import React from 'react'

const Projects = (isDarkMode) => {
    return (
      <div id='project' className='w-full px-[12%] py-10 scroll-mt-20 min-h-screen'>
            <h4 className='text-center text-5xl font-Ovo'>
            My Projects
            </h4>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus numquam laborum corrupti ipsa. Magni obcaecati, 
            reiciendis suscipit quidem hic repellat accusantium, inventore debitis labore ab architecto dolorem voluptatum recusandae harum.
            </p>
            
            <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map((project, index) => (
                    <div
                    key={index}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                    style={{ backgroundImage: `url(${project.bgImage})` }}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
                    flex items-center justify-between duration-500 group-hover:bottom-10'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
      </div>
    )
  }

export default Projects
