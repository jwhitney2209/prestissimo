import React from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import StudentList from "../components/StudentList";

const Students = () => {
  const { user } = useAuthContext();
  const { documents: students } = useCollection("students", [
    "uid",
    "==",
    user.uid,
  ]);


  return (
    <>
      <div className="max-w-[1240px] w-full mx-auto px-2 flex flex-col mb-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="mt-4 sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Students</h1>
              <p className="mt-2 mb-4 text-sm text-gray-700">
                A list of all the students in your program including their name,
                grade level, email and voice part.
              </p>
            </div>
            <div className="flex flex-col mt-4 sm:mt-0">
              <Link to="/addperson"><button
                type="button"
                className="w-full sm:mt-0 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add Person
              </button>
              </Link>
            </div>
          </div>
          <StudentList students={students}/>
        </div>
      </div>
    </>
  );
};

export default Students;
