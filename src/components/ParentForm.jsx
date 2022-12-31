import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { validateEmail } from "../utils/helpers";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { Link } from "react-router-dom";

const ParentForm = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useAuthContext();

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newFirstName === "") {
      return true
    } 

    await addDoc(collection(db, "parents"), {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      phone: newPhone,
      uid: user.uid,
    });

    refreshPage();
  };

  const handleEmailChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Email address invalid!");
      } else {
        setErrorMessage("");
      }
    } 
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
                New Parent
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
                    required
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
                    required
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
                    required
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    onBlur={handleEmailChange} 
                    autoComplete="email"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errorMessage && (
                    <div className="pl-1 text-sm sm:text-xs text-red-600">
                      Please use a valid email address!
                    </div>
                  )}
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

export default ParentForm;
