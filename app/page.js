'use client'
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const [homeAnimationKey, setHomeAnimationKey] = useState(0);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
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

  const replayHomeAnimation = (event) => {
    event.preventDefault();
    const scrollStyle = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.history.replaceState(null, '', '#top');
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = scrollStyle;
    window.requestAnimationFrame(() => setHomeAnimationKey((key) => key + 1));
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onHomeClick={replayHomeAnimation} />
      <Header animationKey={homeAnimationKey} />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
