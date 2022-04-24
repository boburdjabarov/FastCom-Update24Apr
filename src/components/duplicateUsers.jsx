// import React, { useState } from "react";
// import api from "../api";

// const Users = () => {
//   const [users, setUsers] = useState(api.users.fetchAll());

//   const handleDelete = (user) => {
//     setUsers((prevState) => prevState.filter((a) => a !== user));
//   };

//   const renderPhrase = () => {
//     if (users.length > 3) {
//       return (
//         <ul className="badge bg-primary ">
//           "{users.length} people gonna party with you today"
//         </ul>
//       );
//     } else if (users.length !== 0 && users.length <= 3) {
//       return (
//         <ul className="badge bg-primary ">
//           "Ooops you are unlucky, only {users.length} people gonna party with
//           you today"
//         </ul>
//       );
//     }
//   };

//   if (users.length > 0) {
//     return (
//       <>
//         <span>{renderPhrase()}</span>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Names</th>
//               <th>Occupation</th>
//               <th>Qualities</th>
//               <th>Completed meetings</th>
//               <th>Rate</th>
//               <th>button</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.profession.name}</td>
//                 <td>
//                   {user.qualities.map((qualities) => (
//                     <span
//                       key={qualities._id}
//                       className={"badge rounded-pill m-1 bg-" + qualities.color}
//                     >
//                       {qualities.name}
//                     </span>
//                   ))}
//                 </td>
//                 <td>{user.completedMeetings}</td>
//                 <td>{user.rate}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     );
//   } else
//     return <ul className="badge bg-danger">"Nobody wanna party with you"</ul>;
// };

// export default Users;
