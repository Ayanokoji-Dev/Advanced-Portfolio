
const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center">
            <div className="w-4/5 leading-10 font-bold text-xl rounded-xl p-6
            bg-slate-300 dark:bg-slate-700 mb-16
            ">
                <p>
                🚀 Frontend Developer | Crafting Engaging User Experiences
                <br />
                Hi! I&apos;m a passionate frontend developer skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. I specialize in creating responsive, dynamic, and user-friendly web interfaces with a keen eye for design and functionality.
                <br />
                🌟 What I Offer:
                <br />
                -Expertise in modern web development tools and techniques.
                <br />
                -A commitment to delivering pixel-perfect and performance-optimized solutions.
                <br />
                🌱 Currently enhancing my React skills and exploring advanced UI/UX principles.
                <br />
                📫 Let&apos;s connect to collaborate and build amazing digital experiences!
                </p>
                <span className="">
                    <p className="text-4xl ml-12 text-emerald-400">40+</p>
                    <p className="text-lg ml-12 text-emerald-600">Projects Done</p>
                </span>
            </div>
            <div className="w-4/5 leading-10 font-bold text-xl rounded-xl p-24
            bg-slate-300 dark:bg-slate-700 mb-16 flex flex-col gap-12
            ">
                <span className="flex items-center">
                    <p className="w-1/5 font-bold text-2xl">HTML & CSS </p>
                    <p
                    className="inline-block relative bg-slate-900 w-4/5 h-4 rounded-2xl"
                    >
                        <span
                        className="inline-block absolute bg-gradient-to-r from-blue-600 to-blue-300 w-11/12 h-4 rounded-2xl"
                        ></span>
                    </p>
                </span>
                <span className="flex items-center">
                    <p className="w-1/5 font-bold text-2xl">JavaScript </p>
                    <p
                    className="inline-block relative bg-slate-900 w-4/5 h-4 rounded-2xl"
                    >
                        <span
                        className="inline-block absolute bg-gradient-to-r from-yellow-600 to-yellow-300 w-4/6 h-4 rounded-2xl"
                        ></span>
                    </p>
                </span>
                <span className="flex items-center">
                    <p className="w-1/5 font-bold text-2xl">React </p>
                    <p
                    className="inline-block relative bg-slate-900 w-4/5 h-4 rounded-2xl"
                    >
                        <span
                        className="inline-block absolute bg-gradient-to-r from-cyan-500 to-cyan-300 w-10/12 h-4 rounded-2xl"
                        ></span>
                    </p>
                </span>
                <span className="flex items-center">
                    <p className="w-1/5 font-bold text-2xl">Bootstrap </p>
                    <p
                    className="inline-block relative bg-slate-900 w-4/5 h-4 rounded-2xl"
                    >
                        <span
                        className="inline-block absolute bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 w-3/5 h-4 rounded-2xl"
                        ></span>
                    </p>
                </span>
            </div>
        </div>
    )
}

export default About
