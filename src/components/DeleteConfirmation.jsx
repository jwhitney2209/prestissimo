import React from "react";

const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, firstName, lastName, message }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
           Delete Confirmation
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-success" onClick={() => confirmModal(id)}>
              Confirm
            </label>
            <label htmlFor="my-modal-6" className="btn" onClick={hideModal}>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmation;
