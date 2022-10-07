import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const ClassForm = () => {
  const [newClass, setNewClass] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "class"), {
      className: newClass,
      description: newDescription,
      uid: user.uid,
    });

    setNewClass("");
    setNewDescription("");
  };
  return (
    <>
    <Link to="/dashboard" className="font-medium flex mb-2 text-primary hover:text-primary-focus">
      <p><FaChevronCircleLeft size={20} /> Back to Dashboard</p>
    </Link>
    <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="class"
          className="block text-sm font-medium text-gray-700"
        >
          Class Name
        </label>
        <div className="mt-1">
          <input
            id="class"
            onChange={(e) => setNewClass(e.target.value)}
            value={newClass}
            name="class"
            type="text"
            placeholder="ex. Tenor-Bass Choir"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <label
          htmlFor="period"
          className="block text-sm font-medium mt-2 text-gray-700"
        >
          Description
        </label>
        <div className="mt-1">
          <input
            id="class"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            name="class"
            type="text"
            placeholder="ex. 7th Period"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-focus w-full md:w-[150px] rounded-md mx-auto font-medium my-6 px-6 py-3 text-white"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default ClassForm;
