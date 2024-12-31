// // import { createSlice, nanoid } from "@reduxjs/toolkit";

// // const initialState = {
// //   todosWithNots: {
// //     todos: [],
// //   },
// // };

// // export const TodoSlicer = createSlice({
// //   name: "todos",
// //   initialState,
// //   reducers: {
// //     AddToDo: (state, action) => {
// //       const { name, email, country, Cstate, address, type } = action.payload;
// //       const todo = {
// //         id: nanoid(),
// //         name,
// //         email,
// //         country,
// //         Cstate,
// //         address,
// //         type,
// //       };
// //       state.todosWithNots.todos.push(todo);
// //       console.log("todo added:", todo);
// //     },
// //     DeleteToDo: (state, action) => {
// //       const idToDelete = action.payload; // Get the ID of the todo to delete
// //       state.todosWithNots.todos = state.todosWithNots.todos.filter(
// //         (todo) => todo.id !== idToDelete
// //       );
// //       console.log("todo deleted with id:", idToDelete);
// //     },
// //   },
// // });

// // export const { AddToDo, DeleteToDo } = TodoSlicer.actions;
// // export default TodoSlicer.reducer;


// import { createSlice,nanoid } from "@reduxjs/toolkit";

// const initialState=[];
// export const TodoSlicer = createSlice({
// name:"todo",
// initialState,
// reducers:{
//   AddToDo :(state,action)=>{
//     const {name,email,country,phone,address} = action.payload;
//   }
// }
// });



import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  Todos:[]
};
export const TodoSlicer = createSlice({
  name:"todoSlice",
  initialState,
  reducers:{
    CreateTodo:(state,action)=>{
      const {name,email,country,Cstate,address,type} = action.payload;
      const todo = {
        id:nanoid(),
        name,
        email,
        country,
        Cstate,
        address,
        type
      };
      state?.Todos?.push(todo)
    }
  }
})

export const {CreateTodo} = TodoSlicer.actions;
export default TodoSlicer.reducer;