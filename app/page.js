'use client'
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {

  const [isDarkMode,setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);  

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
     <Header isDarkMode={isDarkMode} />
     <About isDarkMode={isDarkMode} />
     <Projects isDarkMode={isDarkMode} />
     <Footer isDarkMode={isDarkMode} />
    </>
  ); 
}
