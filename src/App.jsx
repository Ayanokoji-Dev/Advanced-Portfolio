import { useState } from "react";
import Header from "./Components/Header";
import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    // Apply the theme to the root element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <div className=" dark:bg-slate-950 dark:text-slate-200 bg-slate-100 text-slate-950 
    w-full min-h-screen scroll-smooth">
      <Header darkFun={toggleTheme} currentTheme={theme} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
