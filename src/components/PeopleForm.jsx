import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PeopleForm = () => {
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
    "Bass 2"
  ];
  const gradeOptions = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]

  const [newFirstName, setNewFirstName] = useState("");
  const [newGrade, setNewGrade] = useState(gradeOptions[0]);
  const [newEmail, setNewEmail] = useState("");
  const [newVoicePart, setNewVoicePart] = useState(voicePartOptions[0]);
  const { user } = useAuthContext();
  
  
  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "people"), {
      name: newFirstName,
      voicePart: newVoicePart,
      gradeLevel: newGrade,
      email: newEmail,
      uid: user.uid,
    });

    refreshPage();
  
  };
  return (
    <>
      <p className="font-medium flex mb-2 text-primary hover:text-primary-focus">
        <Link to="/dashboard">
          <FaChevronCircleLeft size={20} /> Back to Dashboard
        </Link>
      </p>
      <div className="max-w-[1240px] w-full flex flex-row justify-center">
        <div></div>
        <form className="form-control w-full max-w-xs" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="class" className="label">
              <span className="label-text">First Name</span>
            </label>
            <div className="">
              <input
                id="firstName"
                onChange={(e) => setNewFirstName(e.target.value)}
                value={newFirstName}
                name="firstName"
                type="text"
                placeholder="ex. Jason"
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="">
              <input
                id="email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                name="email"
                type="text"
                placeholder="ex. student@email.com"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <label htmlFor="voicePart" className="label">
              <span className="label-text">Voice Part</span>
            </label>
            <div className="form-control">
              <div className="input-group-xs">
                <select
                  className="w-full select select-bordered select-primary"
                  onChange={(e) => setNewVoicePart(e.target.value)}
                  defaultValue="Select One"
                >
                  <option disabled>Select One</option>
                  {voicePartOptions.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}

                </select>
              </div>
            </div>
            <label htmlFor="gradeLevel" className="label">
              <span className="label-text">Grade Level</span>
            </label>
            <div className="form-control">
              <div className="input-group-xs">
                <select
                  className="w-full select select-bordered select-primary"
                  onChange={(e) => setNewGrade(e.target.value)}
                  defaultValue="Select One"
                >
                  <option disabled>Select One</option>
                  {gradeOptions.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 btn btn-primary w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PeopleForm;
