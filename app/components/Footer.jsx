import { assets } from '@/assets /assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20' id='contact'>
        <div className='text-center'>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='email-icon' className='w-6' />
            bakeryeain@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Pan Phoo Eain. All rights reserved</p>
            <ul className='flex items-center gap-12 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/ppe11">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/pan-phoo-eain-119768350/">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.instagram.com/panphooeain16/">Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
