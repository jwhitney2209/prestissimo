import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { Link, useNavigate } from "react-router-dom";

const AddEnsemble = () => {
  const navigate = useNavigate();
  const [newEnsembleName, setNewEnsembleName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useAuthContext();

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newEnsembleName === "") {
      return;
    }

    await addDoc(collection(db, "ensembles"), {
      name: newEnsembleName,
      uid: user.uid,
    });

    navigate('/ensembles');
  };

  const handleChange = (e) => {
    if (e.target.name === 'ensemble-name') {
      const name = e.target.value
      if (!name) {
        setErrorMessage("Please enter an ensemble name!")
      } else {
        setErrorMessage('');
      }
    } 
  }

  return (
    <>
    <div className="max-w-[1240px] w-full mx-auto px-8 flex flex-col m-6">
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Ensemble
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Please enter the ensemble name.
              </p>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="ensemble-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Ensemble Name
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    required
                    type="text"
                    name="ensemble-name"
                    id="ensemble-name"
                    onChange={(e) => setNewEnsembleName(e.target.value)}
                    onBlur={handleChange}
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                  {errorMessage && (
                    <div className="pl-1 text-sm sm:text-xs text-red-600">
                      Please enter a name for the ensemble.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link to="/dashboard">
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
      </div>
    </>
  );
};

export default AddEnsemble;
