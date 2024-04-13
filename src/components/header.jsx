import React from 'react'
import './header.css'
import { FaUserAlt, FaLaptopCode, FaBookOpen, FaCode, FaMailBulk, FaMoon, FaSun } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import scrollToElement from '../utils/scroll'

import { useEffect, useState } from 'react';

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const mobMenu = () => {
        if (menu) {
            setMenu(false);
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('mobileMenu').style.left = '-100%';
        }
        else {
            setMenu(true);
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('mobileMenu').style.left = '0%';
        }
    }

    return (
        <>
            <div className='fixed w-full top-0 z-20'>
                <div className='flex w-full flex-row items-center p-6 h-10 justify-between bg-white shadow-sm dark:bg-gray-900 dark:text-[#A5A5A5]'>
                    <div className='flex md:hidden'>
                        <h1 className='text-black dark:text-white mr-16 cursor-pointer' onClick={() => { scrollToElement('about') }}> Umesha Rukshan</h1>
                        <div className='block md:hidden'>
                            <ul className='flex gap-2 md:flex-col cursor-pointer'>
                                <li onClick={() => { scrollToElement('about') }}> <FaUserAlt /> About</li>
                                <li onClick={() => { scrollToElement('skills') }}> <FaLaptopCode /> Skills</li>
                                <li onClick={() => { scrollToElement('education') }}> <FaBookOpen /> Education</li>
                                <li onClick={() => { scrollToElement('projects') }}> <FaCode /> Projects</li>
                                <li onClick={() => { scrollToElement('contact') }}> <FaMailBulk /> Contact</li>
                            </ul>
                        </div>
                    </div>
                    <i className='hidden md:block text-xl'>
                        {
                            menu ? <AiOutlineClose onClick={() => mobMenu()} /> : <AiOutlineMenu onClick={() => mobMenu()} />
                        }
                    </i>
                    <div className='md:relative cursor-pointer' onClick={(e) => toggleTheme()}>
                        <i className='text-[#1571C6] text-xl'>  {theme === 'dark' ? <FaMoon /> : <FaSun />}  </i>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex'>
                <div id='mobileMenu' className='z-10 -left-full flex flex-col w-fit min-w-[40vw] fixed h-full bg-white shadow-sm dark:bg-gray-900 dark:text-[#A5A5A5] transition-all items-center'>
                    <ul className='flex flex-col gap-5 mt-20 px-5'>
                        <li onClick={() => { scrollToElement('about') ; mobMenu() }}> <FaUserAlt /> About</li>
                        <li onClick={() => { scrollToElement('skills') ; mobMenu() }}> <FaLaptopCode /> Skills</li>
                        <li onClick={() => { scrollToElement('education') ; mobMenu() }}> <FaBookOpen /> Education</li>
                        <li onClick={() => { scrollToElement('projects') ; mobMenu() }}> <FaCode /> Projects</li>
                        <li onClick={() => { scrollToElement('contact') ; mobMenu() }}> <FaMailBulk /> Contact</li>
                    </ul>
                </div>
                <div id='overlay' className='hidden w-[70vw] h-full fixed right-0 z-0 backdrop-blur-sm transition-all' onClick={() => { mobMenu() }} />
            </div>
        </>
    )
}

export default Header