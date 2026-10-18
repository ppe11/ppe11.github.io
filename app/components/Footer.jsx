import { assets } from '@/assets /assets';
import Image from 'next/image';
import React from 'react';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.13.64-1.39-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.75 1.06A9.26 9.26 0 0 1 12 6.73c.85 0 1.71.12 2.51.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.65.73 1.04 1.65 1.04 2.78 0 3.96-2.33 4.83-4.56 5.09.36.32.68.92.68 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
    <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3.1a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 12.98c0-3.17-1.69-4.65-3.95-4.65-1.82 0-2.63 1-3.08 1.7V8.5h-3.38V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19h3.37v-6.02Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.8" r="0.75" className="fill-current stroke-none" />
  </svg>
);

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ppe11', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pan-phoo-eain-119768350/', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/panphooeainn/', icon: InstagramIcon },
];

const Footer = () => {
  return (
    <footer id='contact' className='relative mt-20 overflow-hidden px-[12%] py-14'>
      <div aria-hidden='true' className='absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-rose-100/50 blur-3xl dark:bg-violet-400/10' />
      <div className='relative mx-auto max-w-3xl text-center'>
        <h4 className='text-lg font-Ovo'>Let&apos;s connect</h4>
        <h2 className='mt-2 text-4xl font-Ovo'>Find me online</h2>
        <p className='mx-auto mt-4 max-w-xl text-gray-600 dark:text-white/80'>I&apos;m always happy to connect about software, projects, and new opportunities.</p>

        <a href='mailto:ppe1@sfu.ca' className='mx-auto mt-6 flex w-max items-center gap-2 rounded-full border border-gray-400 px-6 py-3 transition hover:bg-lightHover dark:border-white/50 dark:hover:bg-darkHover'>
          <Image src={assets.mail_icon} alt='' className='w-5' />
          ppe1@sfu.ca
        </a>

        <div className='mt-8 flex justify-center gap-4'>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label} title={social.label} className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-700 transition hover:-translate-y-1 hover:bg-lightHover hover:shadow-black dark:border-white/50 dark:text-white dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      <p className='mt-12 text-center text-sm text-gray-500 dark:text-white/60'>© 2026 Pan Phoo Eain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
