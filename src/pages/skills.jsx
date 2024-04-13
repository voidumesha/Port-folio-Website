import React from 'react'
import Docker from '../svgs/docker'
import Reactjs from '../svgs/react'
import Nodejs from '../svgs/node'
import Tailwind from '../svgs/tailwind'
import Mongo from '../svgs/mongo'
import Firebase from '../svgs/firebase'
import Git from '../svgs/git'
import Python from '../svgs/python'
import JavsScript from '../svgs/javascript'



function skills() {

  const skills = [
    {
      name: 'JavaScript',
      icon: JavsScript,
      color: 'yellow'
    },
    {
      name: 'Python',
      icon: Python,
      color: 'blue'
    },
    {
      name: 'Node.js',
      icon: Nodejs,
      color: 'green'
    },
    {
      name: 'React JS',
      icon: Reactjs,
      color: 'blue'
    },{
      name: 'Git',
      icon: Git,
      color: 'red'
    },
    {
      name: 'Tailwind CSS',
      icon: Tailwind,
      color: 'blue'
    },
    {
      name: 'Docker',
      icon: Docker,
      color: 'blue'
    },
    {
      name: 'MongoDB',
      icon: Mongo,
      color: 'green'
    },
    {
      name: 'Firebase',
      icon: Firebase,
      color: 'yellow'
    }, 
  ]


  return (
    <div className="pt-28 flex flex-col justify-center items-center  dark:bg-black" id='skills'>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest"> Tech Environment </h1>
      <div className="flex flex-wrap gap-5 w-[80vw] md:w-[90%] min-h-[50vh] justify-center">
        {
          skills.map((skill, index) => (
            <div key={index} className="flex flex-col justify-center items-center w-48 h-48 md:w-28 md:h-28 rounded-md bg-white dark:bg-gray-900 shadow-md hover:scale-105">
              <div className={`flex justify-center items-center w-36 h-36 rounded-full bg-${skill.color} text-${skill.color}-500`}>
                <skill.icon className="w-24 h-24 md:w-14 md:h-14" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{skill.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default skills