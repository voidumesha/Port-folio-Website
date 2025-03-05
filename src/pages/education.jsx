import React from 'react'
import { Timeline } from 'antd';
import { BsCalendarDate } from "react-icons/bs";
//import { TfiHandPointRight } from "react-icons/tfi";

function education() {
  return (
    <div className="pt-28 flex flex-col justify-center items-center  dark:bg-black" id='education'>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">Education</h1>
      <div className='w-[70vw] md:w-[90vw] rounded-md bg-white dark:bg-gray-900 py-8 shadow-md'>
        <Timeline
          mode="alternate"
          pending="Keep Learning..."
          className='dark:text-gray-400 dark:border-gray-400'
          items={[
            {
              children: (
                <>
                  <p className='dark:text-gray-300'> <b>College </b> </p>
                  <p className='dark:text-gray-400'> Technology Stream </p>
                  <a href='https://www.facebook.com/profile.php?id=100062943263160' target='_blank' rel="noreferrer" className='dark:text-gray-400'> Palannoruwa Central College </a> <br />
                  <p className='flex items-center gap-2 dark:text-gray-400'> <BsCalendarDate /> 2016 - 2019 </p>
                </>
              ),
              color: 'blue',
            },
            {
              children: (
                <>
                  <p className='dark:text-gray-300'> <b>University </b> </p>
                  <p className='dark:text-gray-400'> Bachelor of Information Communication Technology </p>
                  <a href='https://www.rjt.ac.lk/' target='_blank' rel="noreferrer" className='dark:text-gray-400'> Rajarata University of Sri Lanka </a> <br />
                  <p className='flex justify-end items-center gap-2 dark:text-gray-400'> <BsCalendarDate /> 2021 - 2025 </p>
                </>
              ),
              color: 'blue',
            }
          ]}
        />
      </div>
    </div>
  )
}

export default education