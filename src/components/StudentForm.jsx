import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { Link } from "react-router-dom";

const StudentForm = () => {
  const voicePartOptions = [
    "Soprano",
    "Soprano 1",
    "Soprano 2",
    "Alto",
    "Alto 1",
    "Alto 2",
    "Tenor",
    "Tenor 1",
    "Tenor 2",
    "Bass",
    "Bass 1",
    "Bass 2",
  ];
  const gradeOptions = ["6", "7", "8", "9", "10", "11", "12"];

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newStudentId, setNewStudentId] = useState("");
  const [newGrade, setNewGrade] = useState(gradeOptions[0]);
  const [newEmail, setNewEmail] = useState("");
  const [newVoicePart, setNewVoicePart] = useState(voicePartOptions[0]);
  const [newPhone, setNewPhone] = useState("");

  const { user } = useAuthContext();

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newFirstName === "") {
      return;
    }

    await addDoc(collection(db, "students"), {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      voicePart: newVoicePart,
      gradeLevel: newGrade,
      email: newEmail,
      studentId: newStudentId,
      uid: user.uid,
    });

    refreshPage();
  };
  return (
    <>
        <form
          className="space-y-8 divide-y divide-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="space-y-8 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  New Student
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Add information for new student.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    First name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => setNewFirstName(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Last name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      onChange={(e) => setNewLastName(e.target.value)}
                      autoComplete="family-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Student ID
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="student-id"
                      onChange={(e) => setNewStudentId(e.target.value)}
                      id="student-id"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Phone
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => setNewPhone(e.target.value)}
                      id="phone"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Email address
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setNewEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Grade Level
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <select
                      id="grade-level"
                      name="grade-level"
                      onChange={(e) => setNewGrade(e.target.value)}
                      defaultValue="Select One"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    >
                      <option disabled>Select One</option>
                      {gradeOptions.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Voice Part
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <select
                      id="voice-part"
                      name="voice-part"
                      onChange={(e) => setNewVoicePart(e.target.value)}
                      defaultValue="Select One"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    >
                      <option disabled>Select One</option>
                      {voicePartOptions.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <Link to="/students">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
    </>
  );
};

export default StudentForm;
