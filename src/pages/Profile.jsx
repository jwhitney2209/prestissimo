import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

  const submitDelete = async (studentId) => {
    const ref = doc(db, 'students', studentId)
    await deleteDoc(ref);
    nav("/students");
  };

  useEffect(() => {
    setIsPending(true);
    const docRef = doc(db, "students", id);

    onSnapshot(docRef, (doc) => {
      let results = [];
      results.push({ ...doc.data() });
      if (doc.exists) {
        setIsPending(false);
        setData(results);
      } else {
        setIsPending(false);
        setError("Could not find that student");
      }
      console.log(doc.data());
    });
  }, [id]);

  return (
    <>
      {user && (
        <div className="max-w-[1240px] w-full mx-auto px-2 flex flex-col mb-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="mt-4 sm:flex-auto">
                {error && <p className="error">Could not find that student</p>}
                {isPending && <p className="loading">Loading...</p>}
                {data &&
                  data.map((student, index) => (
                    <h1
                      key={index}
                      className="text-xl font-semibold text-gray-900"
                    >
                      {student.lastName}, {student.firstName}
                    </h1>
                  ))}
                <p className="mt-2 mb-4 text-sm text-gray-700"></p>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 sm:mt-0">
                <Link to="/dashboard">
                  <button
                    type="button"
                    className="w-full sm:mx-2 sm:mt-0 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Back to Dashboard
                  </button>
                </Link>
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
