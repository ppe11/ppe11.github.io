import React from 'react';
import Image from 'next/image';
import {useRef,useEffect,useState} from 'react';
import { assets } from '@/assets /assets';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
    window.addEventListener('scroll', () => {
        if (scrollY > 50) {
        setIsScroll(true);
        } else {
        setIsScroll(false);
        }
    });
    }, []);

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='header-background-color' className='w-full' />
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
 
            <div>
                <a href="#top" className="text-2xl font-bold">Pan Phoo Eain </a>
            </div>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar