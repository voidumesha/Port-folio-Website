import React, { useEffect, useState } from 'react'
import { BiLinkExternal } from "react-icons/bi";

function Projects() {

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      name: 'POS System',
      description: 'This project is a Java-based Point of Sale (POS) system developed using NetBeans IDE. The system provides functionalities for managing sales transactions, inventory, and generating reports.',
      tags: ['Java', 'NetBeans IDE'],
      link: 'https://github.com/voidumesha/Point-of-Sale-POS-System-in-Java'
    },
    {
      name: 'FOOD Delivery Platform',
      description: 'This project is a web-based food delivery platform developed using MERN Stack. The platform allows users to order food and track their orders.',
      tags: ['MongoDB','React','Node.js'],
      link: 'https://github.com/voidumesha/Food-Delivery-Platform-MERN-Stack-React-js'
    },
    {
      name: 'Train Ticket Reservation',
      description: 'This is my first year project.Using the C  based on cmd line project.The system allows users to view train schedules, and manage routes.',
      tags: ['C', 'CMD'],
      link: 'https://github.com/voidumesha/Rail_Code'
    },{
      name: 'Portfolio',
      description: 'This is my portfolio website. Made with React and Tailwind CSS.',
      tags: ['React.js'],
      link: 'https://github.com/voidumesha/Port-folio-Website'
    },
    {
      name: 'Driver-Drowsiness-Detection-Raspberry pi-system | GPS-Tracking-App',
      description: 'A Flutter-based mobile application that helps monitor driver drowsiness and track vehicle location in real time. The app is designed for drivers and admins, providing a Google Maps interface, real-time GPS tracking, Firebase integration, and geolocation services. And Have a Raspberry pi system for Drowsiness Detection.',
      tags: ['Python ', 'Flutter', 'Raspberry pi', 'Firebase', 'Google Maps','Tensorflow'],
      link: 'https://github.com/voidumesha/Driver-Drowsiness-Detection---GPS-Tracking-App'
    },
    {
      name: 'Generator_automation_system',
      description: 'This is a Final year research which I done as Job, this system has a lot of functions , All functions do GSM based sending message system. When desel Tank near fire detection / Tank auto level detect (100%,50%,25%,0%) / Gen on/off status /8am-5pm fuel level / when Tank lid opened / Also has display with push button, current date and time display ,when push button display fuel level and Gen status like that.',
      tags: ['C++','Arduino',],
      link: 'https://github.com/voidumesha/Generators_automation_system'
    },
    {
      name: 'Digital Oil Lamp system',
      description: 'This system working on esp connected local website, and mega board connected all the oil lamp leds ,when clicking the localhost webpage buttons, will turn on oil lamp leds.',
      tags: ['C++','Arduino','ESP32-WROOM-32','HTML','CSS','JS'],
      link: 'https://github.com/voidumesha/Oil-Lamp-system'
    },
    {
      name: 'OpenCv_Painter',
      description: 'This application will detect you hand and when you draw something it will paint and can erase the lines on screen.',
      tags: ['Python','OpenCv','MediaPipe','Hand Tracking'],
      link: 'https://github.com/voidumesha/Opencv_Hand_Painter'
    }

  ]

  const [projectsToShow, setProjectsToShow] = useState(projects)

  useEffect(() => {
    if (filter === 'all') {
      setProjectsToShow(projects);
    } else {
      const filteredProjects = projects.filter(project =>
        project.tags.includes(filter)
      );
      setProjectsToShow(filteredProjects);
    }
    // eslint-disable-next-line 
  }, [filter]);

  const handleFilterClick = event => {
    setFilter(event.target.value);
  };

  return (
    <div className="pt-28 flex flex-col justify-center items-center  dark:bg-black" id='projects'>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">Open Souce Projects</h1>
      <div>
        <button
          className={`border dark:border-gray-800 text-sm py-1 px-4 ${filter === 'all'
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : 'bg-white text-black dark:bg-black dark:text-white'
            }`}
          value='all'
          onClick={handleFilterClick}
        >
          All
        </button>
        <button
          className={`border dark:border-gray-800 text-sm py-1 px-4 ${filter === 'React.js'
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : 'bg-white text-black dark:bg-black dark:text-white'
            }`}
          value='React.js'
          onClick={handleFilterClick}
        >
          React.js
        </button>
        <button
          className={`border dark:border-gray-800 text-sm py-1 px-4 ${filter === 'Python'
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : 'bg-white text-black dark:bg-black dark:text-white'
            }`}
          value="Python"
          onClick={handleFilterClick}
        >
          Python
        </button>
        <button
          className={`border dark:border-gray-800 text-sm py-1 px-4 ${filter === 'Node.js'
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : 'bg-white text-black dark:bg-black dark:text-white'
            }`}
          value='Node.js'
          onClick={handleFilterClick}
        >
          Node.js
        </button>
        <button
          className={`border dark:border-gray-800 text-sm py-1 px-4 ${filter === 'C++'
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : 'bg-white text-black dark:bg-black dark:text-white'
            }`}
          value='C++'
          onClick={handleFilterClick}
        >
          C++
        </button>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-[70vw] md:w-[90vw] min-h-[60vh">
        {projectsToShow.map((project, index) => (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105" key={index}>
            <div className="py-4 px-6 flex flex-col justify-between">
              <a href={project.link} target='_blank' rel="noreferrer">
                <h1 className="text-lg md:text-lg font-semibold text-gray-800 dark:text-white flex truncate items-center gap-1 hover:underline">{project.name} <BiLinkExternal size={10} className='text-gray-500 hover:text-gray-800 cursor-pointer' /> </h1>
              </a>
              <p className="py-2 text-base text-gray-700 dark:text-gray-300 md:text-sm">{project.description}</p>
              <div className="pt-2, gap-2 flex">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-md text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    onClick={(e) => setFilter(e.target.textContent)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects