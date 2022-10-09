import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
          DO LESS. TEACH MORE.
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
          Spend time on what matters
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold pb-4">
            and less time on 
          </p>
          <Typed
            className="md:text-5xl text-primary sm:text-4xl text-xl font-bold md:pl-4 pl-2 pb-4"
            strings={["uniforms.", "fundraising.", "inventory."]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mx-2">
          Manage your program with tools that allow you to focus on the classroom <i>instead</i> of the business.
        </p>
        <button className="btn btn-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
