import React, { useEffect, useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/Photo.jpg';
import { Link } from "react-scroll"; 
import Typewriter from 'typewriter-effect';


const Home = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className=" text-3xl font-bold text-white">
          <Typewriter 
          options={{
            cursor: '/>',
          }}
          onInit={(typewriter)=> {
            typewriter.typeString("< Hi. I'm Antonio Algaba Osuna, nice to meet you. Please take a look around.")
            .start()
            .callFunction(handleTypingComplete);
          }} 
          />
        </h2>
        {isTypingComplete && (<div><p className="text-gray-500 py-4 max-w-md">
           front end devoloper
        </p>
        <div>
        <Link
          to="about"
          smooth
          duration={500}
          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          About Me
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight size={25} className="ml-3" />
          </span>
        </Link>
      </div>
      </div>
        )}
        
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full w-96 mx-10"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;