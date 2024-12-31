// import React from "react";
// import "./TodoList.css"; 
// import { useSelector } from "react-redux";

// const TodoList = () => {
//     const getItems = useSelector((state)=>state?.todo?.Todos)
//   return (
//     <div className="todo-container">
//       <h1 className="todo-title">Todo List</h1>
//       <ul className="todo-list">
//         {getItems?.map((items)=>{
//             return <div key={items?.id} className="todo-card">
//           <li>
//             <strong>Full Name: </strong> {items?.name}
//           </li>
//           <li>
//             <strong>Email:</strong> {items?.email}
//           </li>
//           <li>
//             <strong>Country: </strong> {items?.country}
//           </li>
//           <li>
//             <strong>State: </strong> {items?.Cstate}
//           </li>
//           <li>
//             <strong>Address: </strong> {items?.address}
//           </li>
//           <li>
//             <strong>Address: </strong> {items?.type}
//           </li>
//         </div>
//         })}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
