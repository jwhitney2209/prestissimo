import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import DeleteConfirmation from "../components/DeleteConfirmation";

const Profile = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [studentId, setStudentId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  // handle the displaying of the modal based on id
  const showDeleteModal = (firstName, lastName, id) => {
    setFirstName(firstName);
    setLastName(lastName);
    setStudentId(id);

    setDeleteMessage(
      `Are you sure you want to delete '${lastName}, ${firstName}'?`
    );

    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // const updateStudent = async (id) => {};
  const submitDelete = async (studentId) => {
    const ref = doc(db, "students", studentId);
    await deleteDoc(ref);
    nav("/students");
  };

  useEffect(() => {
    setIsPending(true);
    const docRef = doc(db, "students", id);

    onSnapshot(docRef, (doc) => {
      let results = [];
      if (doc.exists) {
        setIsPending(false);
        results.push({ ...doc.data() });
        setData(results);
      } else {
        setIsPending(false);
        setError("Could not find that student");
      }
    });
  }, [id]);

  return (
    <>
      {user && (
        <div className="max-w-[1240px] w-full mx-auto px-2 flex flex-col mb-6">
          <div className="">
            <div key={user.uid} className="sm:flex sm:items-center">
              <div className="mt-4 sm:flex-auto">
                {error && <p className="error">Could not find that student</p>}
                {isPending && <p className="loading">Loading...</p>}
                {data &&
                  data.map((student, index) => (
                    <div key={student.studentId} className="overflow-hidden bg-white shadow rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          {student.lastName}, {student.firstName}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Personal details and information.
                        </p>
                      </div>
                      <div className="border-t border-gray-200">
                        <dl className="divide-y divide-gray-200">
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">
                              ID#
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              {student.studentId}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Grade
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              {student.gradeLevel}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              {student.email}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Phone#
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              {student.phone}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">
                              Voice Part
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              {student.voicePart}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-4">
            <button
              type="button"
              onClick={() => {
                nav(-1);
              }}
              className="w-full sm:mx-2 sm:mt-0 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Go Back
            </button>
            <button
             type="button"
             className="w-full text-center sm:mr-2 sm:mt-0 justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-md sm:text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto">Edit</button>
            {data &&
              data.map((student, index) => {
                return (
                  <label
                    type="button"
                    key={index}
                    htmlFor="my-modal-6"
                    onClick={() =>
                      showDeleteModal(
                        student.firstName,
                        student.lastName,
                        student.id
                      )
                    }
                    className="w-full text-center mt-2 sm:mt-0 justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-md sm:text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Delete
                  </label>
                );
              })}
          </div>
        </div>
      )}
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        firstName={firstName}
        lastName={lastName}
        id={id}
        message={deleteMessage}
      />
    </>
  );
};

export default Profile;
