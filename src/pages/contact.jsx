import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'

function contact() {
  return (
    <div className="pt-28 pb-28 flex flex-col justify-center items-center  dark:bg-black" id='contact'>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest ">Contact</h1>
      <div className=" shadow-md flex flex-row md:flex-col md:gap-8 bg-white dark:bg-gray-900 py-24 md:py-5 w-[70vw] md:w-[90vw] rounded-md">
        <div className='flex flex-col w-[49vw] md:w-full items-center justify-center gap-10'>
          <ul className="flex flex-wrap md:w-[70%] gap-5 justify-center text-blue-500 text-xl">
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16"> <a className='flex w-16 h-16 items-center justify-center' href="https://github.com/voidumesha" target="_blank" rel="noreferrer"> <FaGithub /> </a> </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16"> <a className='flex w-16 h-16 items-center justify-center' href="https://twitter.com/RukshanUmesha" target="_blank" rel="noreferrer"> <FaTwitter /> </a> </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16"> <a className='flex w-16 h-16 items-center justify-center' href="https://t.me/Void_Umesha" target="_blank" rel="noreferrer"> <FaTelegram /> </a> </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16"> <a className='flex w-16 h-16 items-center justify-center' href="https://www.linkedin.com/in/umesha-rukshan-b1380b217" target="_blank" rel="noreferrer"> <FaLinkedin /> </a> </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16"> <a className='flex w-16 h-16 items-center justify-center' href="mailto:Umesharukshan2000@gmail.com" target="_blank" rel="noreferrer"> <FaEnvelope /> </a> </li>
          </ul>
          <div>
            <h2 className='text-2xl lg:text-lg md:text-base text-center font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pb-5'> Want to hire me ?</h2>
            <p className='text-center text-gray-500 dark:text-gray-400 px-5'>I am available for freelance work. Connect with me via social media or email.</p>
          </div>
        </div>
        <div className='flex w-[50vw] md:w-full items-center justify-center'>
          <form className='flex gap-5 flex-col w-[60%] md:w-[80%]' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="Email" className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-lg focus:outline-none focus:border-blue-500" />
            <button type="submit" className="w-full p-2 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-200 hover:dark:bg-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:border-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact