import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import StudentList from "./StudentList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EnsembleNav = (props) => {
  const { user } = useAuthContext();
  const classes = props.classes;

  const [newClassId, setNewClassId] = useState("");
  const { documents: students } = useCollection("students", [
    "classId",
    "==",
    newClassId,
  ]);

  const handleChange = (e) => {
    const classId = e.target.id;
    setNewClassId(classId);
  };
  return (
    <>
      {user && (
        <div className="mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {classes &&
                classes.map((tab) => (
                  <option key={tab.id} id={tab.id} onBlur={handleChange}>
                    {tab.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {classes &&
                classes.map((tab) => (
                  <button
                    name="current-tab"
                    id={tab.id}
                    onClick={handleChange}
                    key={tab.id}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </button>
                ))}
            </nav>
            <StudentList students={students} />
          </div>
        </div>
      )}
    </>
  );
};

export default EnsembleNav;
