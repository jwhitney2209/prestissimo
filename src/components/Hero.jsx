import React from "react";
import Typed from 'react-typed';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Work Less.</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              Do More.
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Manage your program like never before. With Prestissimo you can spend more time making music and less time on {" "}
            <Typed className="text-indigo-600" strings={['uniforms', 'inventory', 'fundraising']}
                    typeSpeed={80}
                    backSpeed={80}
                    loop />.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Live demo
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
