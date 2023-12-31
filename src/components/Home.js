import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/Photo.jpg';
import { Link } from "react-scroll"; 


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row gap-x-16">
      <div className="flex flex-col justify-center h-full">
        <h2 className=" text-3xl font-bold text-white">
        Hi. I'm Antonio Algaba Osuna, nice to meet you. Please take a look around.
        </h2>
        <div>
          <p className="text-gray-500 py-4 max-w-md">
          Aspiring Front End Developer 
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
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full w-64"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;