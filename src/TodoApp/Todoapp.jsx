import React, { useState } from "react";
import TodoList from "./TodoList";
import { CreateTodo } from "../feeature/todo/todoSlicer";
import { useDispatch } from "react-redux";

const Todoapp = () => {
const [name,setname] = useState('')
const [email,setemail] = useState('')
const [country,setCountry] = useState('')
const [Cstate,setState] = useState('')
const [address,setaddress] = useState('')
const [type,setType] = useState('')
const dispatch = useDispatch();
const handleDataSubmit = ()=>{
  dispatch(CreateTodo({name,email,country,Cstate,address,type}))
}
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center",marginLeft:"34%",marginTop:"40px",flexDirection: "column", width: "400px", gap: "15px" }}>
      <h1 style={{ textAlign: "center" }}>Add Your Product</h1>
      <input
        style={{ padding: "9px" }}
        type="text"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        placeholder="Enter name ..."
        />
      <input
        style={{ padding: "9px" }}
        type="text"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        placeholder="Enter country ..."
      />
      <input
        style={{ padding: "9px" }}
        type="email"
        value={country}
        onChange={(e)=>setCountry(e.target.value)}
        placeholder="Enter email ..."
        />
      <input
        style={{ padding: "9px" }}
        type="text"
        value={Cstate}
        onChange={(e)=>setState(e.target.value)}
        placeholder="Enter state ..."
      />
      <input
        style={{ padding: "9px" }}
        type="text"
        value={address}
        onChange={(e)=>setaddress(e.target.value)}
        placeholder="Enter state ..."
      />
      <select onChange={(e)=>setType(e.target.value)} value={type} style={{ padding: "9px"}} name="type" id="">
        <option value="Todo" >Todo</option>
        <option value="Notes">Notes</option>
      </select>
      <button style={{ padding: "9px" }} onClick={handleDataSubmit} type="button" >
        Submit
      </button>
    </div>
    <div >
      <TodoList />
    </div>
        </>
  );
};

export default Todoapp;
