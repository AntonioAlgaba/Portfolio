import React from 'react';
import projects from "../projects.json"

const Works = () => { 
    return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
          {/* Grid Item */}
          {projects.map((projects) => (
          <div
            key={projects.id}
            style={{ backgroundImage: `url(${projects.image})` }}
            className='group container rounded-md flex justify-center items-center object-center object-cover content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white '>
              {projects.title}
              </span>
              <p className='text-center'>{projects.description}</p>
              <div className='pt-8 text-center'>
                <a href={projects.demo} target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href={projects.code} target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>        
      </div>
    );
  };
  
  export default Works;