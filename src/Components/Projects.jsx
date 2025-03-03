import { useState } from 'react'
// import testImage from '../assets/1734999324372 (1).jpeg'
import { projects } from '../Projects/Projects';


const Projects = () => {

    const [filter,setFilter]=useState('HTML & CSS');

    const filtredProjects = projects.filter((project)=> project.category === filter);

    const readyFiltredProjects = filtredProjects.map((project,index)=>{
        return (
            <div 
            key={index}
            id="project"
            className=' w-80 p-4 m-4 min-h-64 bg-gray-800 rounded-xl flex flex-col justify-center items-start relative'
            >
                <img src={project.image} width={"100%"} className='rounded-xl' />
                <div className="flex justify-start items-center gap-8">
                    <div
                    className='w-3/4 text-left'
                    >
                        <div 
                        id="title"
                        className=' text-xl font-semibold mt-2 mb-4 text-left text-nowrap'
                        >
                            {project.title}
                        </div>
                        <div 
                        id="tags"
                        className='flex gap-2'
                        >
                            <div 
                            id="tag"
                            className='rounded-md border-2 p-0.5 border-gray-600 text-sm w-fit text-nowrap'
                            >
                                {project.tags[0]}
                            </div>
                            <div 
                            id="tag"
                            className='rounded-md border-2 p-0.5 border-gray-600 text-sm w-fit text-nowrap'
                            >
                                {project.tags[1]}
                            </div>
                        </div>
                    </div>
                    <div 
                    className="w-1/4 text-sky-500 hover:text-sky-400"
                    >
                        <div
                        className='cursor-pointer absolute right-8 bottom-4'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="p-20 pt-32 flex justify-start items-start">
            <div
            id="filterBar"
            className="bg-gradient-to-r from-gray-600 to-gray-900 w-1/6 p-4 flex flex-col justify-center
            items-center rounded-xl mr-32
            "
            >
                <button
                onClick={()=>{setFilter("HTML & CSS")}}
                className='flex justify-center items-center gap-2 rounded-xl mb-8 mt-4 text-lg
                bg-gradient-to-b from-gray-400 to-gray-800 w-32 h-16 font-semibold text-nowrap text-white
                transition hover:bg-gradient-to-t hover:scale-95'
                >
                    HTML & CSS
                </button>
                <button
                onClick={()=>{setFilter("JAVASCRIPT")}}
                className='flex justify-center items-center gap-2 rounded-xl mb-8 text-lg
                bg-gradient-to-b from-gray-400 to-gray-800 w-32 h-16 font-semibold text-nowrap text-white
                transition hover:bg-gradient-to-t hover:scale-95'
                >
                    JavaScript
                </button>
                <button
                onClick={()=>{setFilter("TAILWIND")}}
                className='flex justify-center items-center gap-2 rounded-xl mb-8 text-lg
                bg-gradient-to-b from-gray-400 to-gray-800 w-32 h-16 font-semibold text-nowrap text-white
                transition hover:bg-gradient-to-t hover:scale-95'
                >
                    Tailwind
                </button>
                <button
                onClick={()=>{setFilter("GAMES")}}
                className='flex justify-center items-center gap-2 rounded-xl mb-8 text-lg
                bg-gradient-to-b from-gray-400 to-gray-800 w-32 h-16 font-semibold text-nowrap text-white
                transition hover:bg-gradient-to-t hover:scale-95'
                >
                    Games
                </button>
                <button
                onClick={()=>{setFilter("REACT")}}
                className='flex justify-center items-center gap-2 rounded-xl mb-4 text-lg
                bg-gradient-to-b from-gray-400 to-gray-800 w-32 h-16 font-semibold text-nowrap text-white
                transition hover:bg-gradient-to-t hover:scale-95'
                >
                    React
                </button>
            </div>
            <div 
            id="projects"
            className='flex justify-start items-start flex-wrap rounded-lg w-5/6 p-4 min-h-96
            bg-gradient-to-br from-gray-500 to-gray-800'
            >
                {readyFiltredProjects}
            </div>
        </div>
    )
}

export default Projects
