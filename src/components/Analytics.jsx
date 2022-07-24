import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4'src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#6A0DAD] font-bold">PROGRAM DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Materials Centrally</h1>
          <p>
            Your dashboard will be your one stop shop to take care of your program's needs. Inventory, Uniforms, Fundraising/Invoicing, Music Library? You name it. Prestissimo will help you do it... <i>fast! </i>
          </p>
          <button className="bg-[#6A0DAD] hover:bg-[#550a8a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
