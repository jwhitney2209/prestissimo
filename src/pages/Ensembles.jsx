import React from "react";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import EnsembleNav from "../components/EnsembleNav";

const Ensembles = () => {
  const { user } = useAuthContext();
  const { documents: classes } = useCollection("classes", [
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
              <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
                <div className="md:flex md:items-center md:justify-between my-2">
                <h1 className="text-xl font-semibold text-gray-900">Ensembles</h1>
                </div>
                <EnsembleNav classes={classes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ensembles;
