import computerUserImage from '../assets/computer_user-removebg-preview.png'
import myImage from '../assets/WhatsApp_Image_2024-12-28_at_22.26.33-removebg.png'


const Home = () => {
    return (
        <div id="home" className='px-8 w-full flex'>
            <div className='w-3/5  p-72 flex flex-col items-center gap-1'>
                <img src={computerUserImage} width={'100px'} />
                <h4 className=' flex items-center justify-center gap-2'>
                    <span className=' flex justify-center items-center'>
                        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="absolute inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <p className=' ml-2'>Available for work</p>
                </h4>
                <h1 className='text-4xl font-bold text-nowrap'>Turning Ideas into Seamless Digital Experiences</h1>
                <h2 className='text-2xl font-semibold text-nowrap'>
                    Bringing creativity and performance together for the web
                </h2>
                <div className="flex mt-8 gap-16">
                    <button className='flex justify-center items-center gap-2 rounded-xl
                    bg-gradient-to-b from-sky-400 to-sky-800 p-4 font-semibold text-nowrap text-white
                    transition hover:bg-gradient-to-t hover:scale-95
                    '>
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                        </svg>
                    </button>
                    <button className='flex justify-center items-center gap-2 rounded-xl
                    bg-gradient-to-b from-indigo-400 to-indigo-800 p-4 font-semibold text-nowrap text-white
                    transition hover:bg-gradient-to-t hover:scale-95
                    '>
                        Explore my work
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-2/5">
                <div className=' w-1/3 h-2/4 mt-14 absolute inline-block bg-gradient-to-b 
                from-transparent via-transparent to-indigo-500 rounded-2xl
                '></div>
                <img src={myImage} width={'80%'} className=' z-10' />
            </div>
        </div>
    )
}

export default Home
