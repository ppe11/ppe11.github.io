import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import vscode from './vscode.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import profile_img from './mypicture.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import project_icon from './project-icon.png';

export const assets = {
  project_icon,
  code_icon,
  edu_icon,
  vscode,
  figma,
  git,
  right_arrow_white,
  mail_icon,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  menu_black,
  menu_white,
  close_black,
  close_white,
};

export const infoList = [
  {
    icon: assets.code_icon,
    title: 'Languages',
    description: 'C++, Python, Java, JavaScript, HTML, CSS, React.js, Tailwind CSS',
  },
  {
    icon: assets.edu_icon,
    title: 'Education',
    description: 'Software Systems student at Simon Fraser University',
  },
  {
    icon: assets.project_icon,
    title: 'Projects',
    description: 'Selected full-stack and systems projects built with modern frameworks.',
  },
];

export const toolsData = [
  { src: assets.vscode, link: 'https://code.visualstudio.com/' },
  { src: assets.figma, link: 'https://www.figma.com/' },
  { src: assets.git, link: 'https://git-scm.com/' },
];

export const workData = [
  {
    title: 'SmarterAI Flashcards',
    description: 'An AI-powered study tool that generates focused flashcard decks from a topic.',
    bgImage: '/smarter-ai-flashcards.png',
    imagePosition: 'center top',
    tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Gemini API', 'Vercel'],
    liveLink: 'https://smarter-ai-flashcards.vercel.app',
    repoLink: 'https://github.com/ppe11/smarter-ai-flashcards',
  },
  {
    title: 'Love At First Paw',
    description: 'A pet adoption platform that uses Petfinder and Mapbox to help people find a match.',
    bgImage: '/project-1.JPG',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Petfinder API', 'Mapbox', 'Vercel'],
    liveLink: 'https://love-at-first-paw-six.vercel.app',
    repoLink: 'https://github.com/ppe11/loveatfirstpaw',
  },
];
