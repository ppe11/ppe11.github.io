import { workData } from '@/assets /assets';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="project" className="min-h-screen w-full scroll-mt-20 px-[12%] py-10">
      <h4 className="text-center font-Ovo text-5xl">My Projects</h4>
      <p className="mx-auto mb-12 mt-5 max-w-3xl text-center font-Ovo">
        A selection of projects demonstrating my work in full-stack and systems development.
        <br />Built with a focus on clarity, performance, and usability.
      </p>

      <div className="my-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 dark:text-black">
        {workData.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md"
          >
            <div
              className="h-64 w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            <div className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex max-w-[60%] flex-col">
                  <h2 className="mb-1 text-xl font-semibold">{project.title}</h2>
                  <p className="mb-3 text-sm text-gray-500">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-1 mt-1 rounded-full border bg-pink-200 px-4 py-2 text-center text-sm text-black transition hover:bg-pink-300"
                    >
                      Visit Live
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-gray-700 px-4 py-2 text-center text-sm text-gray-700 duration-500 hover:bg-pink-200"
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
