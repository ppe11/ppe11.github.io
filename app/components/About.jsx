import Image from 'next/image';
import { assets } from '@/assets /assets';

const coreSkills = [
  { label: 'Languages & data', skills: ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'MySQL', 'Haskell', 'Rust', 'Assembly'] },
  { label: 'Scripting & systems', skills: ['Linux', 'Bash', 'PowerShell', 'Docker', 'Git', 'GitHub', 'Jenkins', 'Jira', 'Confluence'] },
  { label: 'Practices', skills: ['API Integration', 'Automated Testing', 'CI/CD', 'Debugging', 'Code Reviews', 'Technical Documentation', 'Agile Development'] },
];

const About = () => {
  return (
    <section id='about' className='w-full scroll-mt-20 px-[8%] py-24 lg:px-[12%]'>
      <div className='w-full'>
        <h4 className='mb-2 text-center text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='mx-auto mt-12 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-20'>
          <div className='w-56 shrink-0 sm:w-64'>
            <Image src='/pan-photo.jpg' alt='Pan Phoo Eain' width={720} height={960} className='h-[25rem] w-full rounded-3xl object-cover object-[center_35%]'/>
          </div>

          <div className='max-w-2xl flex-1'>
            <p className='font-Ovo text-lg leading-8'>
              I am a third-year Software Systems student at Simon Fraser University interested in full-stack development, system design, and reliable integrations. I enjoy learning new technologies and building software that solves real problems.
            </p>

            <div className='mt-8'>
              <h3 className='text-xl font-semibold'>Core skills</h3>
              <div className='mt-4 space-y-3'>
                {coreSkills.map((group) => (
                  <p key={group.label} className='text-sm leading-6 text-gray-700 dark:text-white/80'>
                    <span className='font-semibold text-gray-900 dark:text-white'>{group.label}: </span>
                    {group.skills.join(' · ')}
                  </p>
                ))}
              </div>
            </div>

            <a href='#experience' className='mt-8 inline-block rounded-full border border-gray-500 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-lightHover dark:border-white/50 dark:text-white dark:hover:bg-darkHover'>
              View experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
