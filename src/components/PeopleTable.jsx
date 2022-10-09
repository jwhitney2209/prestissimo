// import React, { useState } from "react";
// import { db } from "../firebase/config";
// import { doc, deleteDoc } from "firebase/firestore";
// import { useAuthContext } from "../hooks/useAuthContext";


// const PeopleTable = ({ people }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const [id, setId] = useState(null)
//   const { user } = useAuthContext();

//   const displayModal = async (name, id) => {
//     console.log(name, id)
//     setOpenModal(true);
//     // const ref = doc(db, "people", id);
//     // await deleteDoc(ref);
//   };

//   const confirmDelete = async (id) => {

//   }
//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="table table-compact w-full">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>Voice Part</th>
//               <th>Email</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>

//           <tbody>
//             {user &&
//               people.map((people) => (
//                 <tr key={people.id}>
//                   <td>{people.name}</td>
//                   <td>{people.gradeLevel}</td>
//                   <td>{people.voicePart}</td>
//                   <td>{people.email}</td>
//                   <td>
//                     <div className="flex justify-center">
//                       <button className="btn btn-sm btn-primary" disabled>
//                         Update
//                       </button>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="flex justify-center">
//                       <label
//                         htmlFor="my-modal-6"
//                         onClick={() => displayModal(people.name, people.id)}
//                         className="btn btn-sm btn-error"
//                       >
//                         Remove
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>Voice Part</th>
//               <th>Email</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </tfoot>
//         </table>
//         {openModal && (
//           <>
//             <input type="checkbox" id="my-modal-6" className="modal-toggle" />
//             <div className="modal modal-bottom sm:modal-middle">
//               <div className="modal-box">
//                 <h3 className="font-bold text-lg">
//                   Are you sure you want to delete this user?
//                 </h3>
//                 <p className="py-4">
//                   You've been selected for a chance to get one year of
//                   subscription to use Wikipedia for free!
//                 </p>
//                 <div className="modal-action">
//                   <label htmlFor="my-modal-6" className="btn btn-success">
//                     Confirm
//                   </label>
//                   <label htmlFor="my-modal-6" className="btn">
//                     Cancel
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default PeopleTable;
