import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import DeleteConfirmation from "../components/DeleteConfirmation";

const People = () => {
  const { user } = useAuthContext();
  const { documents: people } = useCollection("people", [
    "uid",
    "==",
    user.uid,
  ]);

  // Local State
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  // Handle the displaying of the modal based on type and Id
  const showDeleteModal = (name, id) => {
    setName(name);
    setId(id);

    setDeleteMessage(`Are you sure you want to delete '${name}'?`)

    setDisplayConfirmationModal(true);
  };

  // hide modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = async (id) => {
    const ref = doc(db, "people", id);
    await deleteDoc(ref);
  };

  return (
    <>
      <div className="max-w-[1240px] w-full mx-auto px-4 flex flex-col mb-6">
        {/* Title/Navbar */}
        <div className="navbar">
          <div className="flex-1">
            <h1 className="md:text-2xl sm:text-3xl text-2xl font-bold pl-1">
              People
            </h1>
          </div>
          <div className="flex-none">
            <Link to="/addpeople">
              <button className="btn btn-sm md:btn-md btn-primary mx-2">
                Add People
              </button>
            </Link>
            <button className="btn btn-sm md:btn-md btn-primary">
              Import People
            </button>
          </div>
        </div>
        <div className="w-full shadow rounded">
          <div className="mt-2 w-full mx-auto">
            <h1 className="font-bold p-2 border-b rounded-t bg-primary text-white">
              Search
            </h1>
          </div>
          {/* Search Box */}
          <form className="">
            <div className="flex sm:flex-row flex-col justify-evenly">
              {/* Search Column 1 */}
              <div className="flex flex-col px-4 sm:pt-8 pt-4">
                <div className="flex sm:flex-row flex-col sm:justify-end py-2">
                  <label
                    htmlFor="lastname"
                    className="text-md font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="sm:pl-6">
                    <input
                      id="class"
                      name="class"
                      type="text"
                      placeholder=""
                      className="border w-full border-gray-300 px-2 py-1 rounded shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-end">
                  <label
                    htmlFor="lastname"
                    className="text-md font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="sm:pl-6">
                    <input
                      id="class"
                      name="class"
                      type="text"
                      placeholder=""
                      className="border w-full border-gray-300 px-2 py-1 rounded shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              {/* Search Column 2 */}
              <div className="flex flex-col px-4 sm:py-8 sm:pb-8 pb-4">
                <div className="flex sm:flex-row flex-col sm:justify-end py-2">
                  <label
                    htmlFor="lastname"
                    className="text-md font-medium text-gray-700"
                  >
                    Ensemble
                  </label>
                  <div className="sm:pl-6">
                    <input
                      id="class"
                      name="class"
                      type="text"
                      placeholder=""
                      className="border w-full border-gray-300 px-2 py-1 rounded shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-end">
                  <label
                    htmlFor="lastname"
                    className="text-md font-medium text-gray-700"
                  >
                    Section
                  </label>
                  <div className="sm:pl-6">
                    <input
                      id="class"
                      name="class"
                      type="text"
                      placeholder=""
                      className="border w-full border-gray-300 px-2 py-1 rounded shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Tables for People */}
        <div className="mt-2">
          {people && (
            <div className="overflow-x-auto">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Voice Part</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {user &&
                    people.map((people) => (
                      <tr key={people.id}>
                        <td>{people.name}</td>
                        <td>{people.gradeLevel}</td>
                        <td>{people.voicePart}</td>
                        <td>{people.email}</td>
                        <td>
                          <div className="flex justify-center">
                            <button className="btn btn-sm btn-info">
                              Update
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <label
                              htmlFor="my-modal-6"
                              onClick={() =>
                                showDeleteModal(people.name, people.id)
                              }
                              className="btn btn-sm btn-error"
                            >
                              Remove
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Voice Part</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </div>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} name={name} id={id} message={deleteMessage} />
    </>
  );
};

export default People;
