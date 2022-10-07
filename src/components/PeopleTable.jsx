import React from "react";

const PeopleTable = ({ people }) => {
  return (
    <>
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
            {people.map(people => (
              <tr>
              <td>{people.name}</td>
              <td>{people.gradeLevel}</td>
              <td>{people.voicePart}</td>
              <td>{people.email}</td>
              <td>
                <div className="flex justify-center">
                  <button className="btn btn-sm btn-primary" disabled>Update</button>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <button className="btn btn-sm btn-error" disabled>Remove</button>
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
    </>
  );
};

export default PeopleTable;
