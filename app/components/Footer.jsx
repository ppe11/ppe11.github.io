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
        </div>
    </div>
  )
}

export default Footer
