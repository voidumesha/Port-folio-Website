import React from "react";
import Typed from 'react-typed';
import { GoLocation } from 'react-icons/go'
import { HiCodeBracket } from "react-icons/hi2";
import { FaGithub, FaTwitter, FaTelegram, FaLinkedin, FaEnvelope, FaCloudDownloadAlt } from 'react-icons/fa'
import Scroll from '../utils/scroll'

function About() {
  return (
    <div className="h-[100vh] flex justify-center items-center  dark:bg-black mt-10" id="about">
      <div className="flex flex-col justify-center bg-white dark:bg-gray-900 p-[2.5rem] md:p-[2rem] rounded-lg shadow-lg w-[70vw] md:w-[85vw] min-h-[50vh]">
        <div className="block bg-white dark:bg-gray-900 rounded-full mx-auto -mt-12 md:-mt-20 lg:-mt-24 h-32 w-32 lg:h-40 lg:w-40 bg-cover bg-center border-4 border-blue-300">
          <img src="https://avatars.githubusercontent.com/u/111561408?s=400&u=74899145e2f04a88f149d2a77daf17e3f2c9501b&v=4" alt="github_image_void_umesha" className=" rounded-full w-[10rem]" />
        </div>
        <h1 className="p-3 text-2xl lg:text-3xl text-center text-gray-600 dark:text-gray-200 uppercase">Umesha Rukshan</h1>
        <div className="flex flex-col gap-4">
          <p className="flex dark:text-gray-400 items-center gap-2 mt-200 "> <HiCodeBracket   />
            <Typed
              strings={['Software Developer', 'Open Source Contributor', 'JavaScript Developer', 'Node.js Developer', 'React Developer','Java Developer', 'Full Stack Developer', 'Web Developer','UI/UX Designer']}
              typeSpeed={50}
              backSpeed={60}
              loop
            /> </p>
          <p className="flex dark:text-gray-400 items-center gap-2"> <GoLocation /> Embilipitiya, Sri Lanka </p>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-justify text-sm">
          Experienced Software Developer with a keen eye for detail and a focus on dynamic solutions. Proficient in multiple programming languages such as Java, 
          Python, JavaScript, and Node.js. Equipped with a strong background in logic and software development, I bring extensive expertise in programming and computer applications. I am currently an undergraduate 
          student from the Faculty of Technology, Department of Information and Communication Technology, at Rajarata University of Sri Lanka, achieving a BICT (Hons) Degree.
          </p>
          <div className="flex gap-3 md:justify-around">
            <button className="rounded-full dark:bg-blue-800 bg-blue-600 px-3 py-2 w-fit text-sm text-white dark:text-gray-300 md:place-self-center hover:bg-blue-900" onClick={() => { Scroll('contact') }}> Get in touch </button>
            <button className="flex gap-2 items-center rounded-full bg-blue-600 dark:bg-blue-800 px-3 py-2 w-fit text-sm text-white dark:text-gray-300 md:place-self-center hover:bg-blue-900"> Download CV <FaCloudDownloadAlt /> </button>
          </div>
        </div>
        <ul className="flex gap-3 justify-center mt-10 text-blue-500 text-xl">
          <li className="hover:text-blue-900"> <a href="https://github.com/chnthkksn" target="_blank" rel="noreferrer"> <FaGithub /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://twitter.com/chnthkksn" target="_blank" rel="noreferrer"> <FaTwitter /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://t.me/its_chinth" target="_blank" rel="noreferrer"> <FaTelegram /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://www.linkedin.com/in/chnthkksn/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a> </li>
          <li className="hover:text-blue-900"> <a href="mailto:chnthkksn@gmail.com" target="_blank" rel="noreferrer"> <FaEnvelope /> </a> </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
