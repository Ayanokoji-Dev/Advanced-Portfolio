import { useEffect, useState } from 'react';
import logoImage from '../../public/awas-high-resolution-logo.png'


const Header = ({darkFun,currentTheme}) => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollY)
    
    
    return (
        <div className={`px-12 flex items-center w-full gap-4 z-20 ${scrollY > 250 ? 'justify-center' : 'justify-between'}
                        py-2 fixed`}>
            <div id="logo" className={`w-28 ${scrollY > 250 ? 'hidden' : 'flex'}`}>
                <img src={logoImage} width={'100%'} className=' rounded-lg' />
            </div>
            <nav className={`flex justify-center items-center gap-4 bg-slate-300 dark:bg-slate-700 
            rounded-3xl p-1 text-xl ${scrollY > 250 ? 'opacity-60' : ''} `}>
                <div 
                className=' cursor-pointer hover:bg-slate-800 hover:text-slate-300 
                dark:hover:bg-slate-300 dark:hover:text-slate-700
                font-medium rounded-3xl p-3 transition duration-500'>
                    <a href="#home">
                        Home
                    </a>
                </div>
                <div 
                className=' cursor-pointer hover:bg-slate-800 hover:text-slate-300 
                dark:hover:bg-slate-300 dark:hover:text-slate-700
                font-medium rounded-3xl p-3 transition duration-500'>
                    <a href="#about">
                        About
                    </a>
                </div>
                <div 
                className=' cursor-pointer hover:bg-slate-800 hover:text-slate-300 
                dark:hover:bg-slate-300 dark:hover:text-slate-700
                font-medium rounded-3xl p-3 transition duration-500'>
                    <a href="#projects">
                        Projects
                    </a>
                </div>
                <div 
                className=' cursor-pointer hover:bg-slate-800 hover:text-slate-300 
                dark:hover:bg-slate-300 dark:hover:text-slate-700
                font-medium rounded-3xl p-3 transition duration-500'>
                    <a href="#contact">
                        Contact
                    </a>
                </div>
            </nav>
            <div className={`${scrollY > 250 ? 'hidden' : 'flex'} gap-6 text-xl font-medium`}>
                <button className='py-3 px-5 bg-gradient-to-r from-sky-500 to-indigo-700 rounded-3xl
                hover:bg-gradient-to-br'>
                    Hire me!
                </button>
                <button
                onClick={()=>{darkFun()}}
                className={`px-4 rounded-full transition duration-500
                    ${currentTheme === 'dark' ?
                        'bg-slate-200 hover:bg-slate-300 text-slate-950' 
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200'}
                    `}
                >
                    
                    {
                        currentTheme === 'dark'
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                            </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                            </svg>
                    }
                </button>
            </div>
        </div>
    )
}

export default Header
