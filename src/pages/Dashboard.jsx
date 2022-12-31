import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto px-2 flex flex-col my-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="mx-2 min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            What would you like to do?
          </p>
          <div className="flex flex-col sm:flex-row my-2">
            <Link to="/addperson">
              <button
                type="button"
                className="mt-2 mx-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Person
              </button>
            </Link>
            <Link to="/addensemble">
              <button
                type="button"
                className="mt-2 mx-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Class
              </button>
            </Link>
            <Link to="/addinventory">
              <button
                type="button"
                className="mt-2 mx-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Inventory
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
