import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
            <div className="text-center text-2xl font-bold ">
              <p>
              Aspiring Front End Developer with a year of self-taught coding experience backed up by a
recently completed 16 weeks, intensive coding Bootcamp
              </p>
            </div>
            <div>
              <p>
              Having worked for 9 years in the hospitality industry in different roles and most recently in
corporate hospitality in law firms, I made the decision in Summer 2022 to change career into
something I have always enjoyed, and that is coding. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;