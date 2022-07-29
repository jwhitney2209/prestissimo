import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <>
    <div className="max-w-[1040px] w-full h-[32rem] mx-auto flex flex-col text-center">
      <h1 className="md:text-2xl sm:text-3xl text-2xl font-bold">
        Welcome to your dashboard!
      </h1>
      <Link to="/addclass" className="w-[300px] md:w-[300px] bg-[#6A0DAD] hover:bg-[#550a8a] rounded-md mx-auto font-medium my-6 px-6 py-3 text-white">
        Add New Class
      </Link>
    </div>
    </>
  );
};

export default Dashboard;
