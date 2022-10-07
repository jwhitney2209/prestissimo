import React from "react";

const PeopleTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td><div className="flex justify-center"><button className="btn btn-sm btn-primary">Update</button></div></td>
              <td><div className="flex justify-center"><button className="btn btn-sm btn-error">Remove</button></div></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Age</th>
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
