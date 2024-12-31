import react, { useState } from 'react'

const Todoos = ()=> {
    const [name,setname] = useState('');
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1 style={{color:"navy"}}>Todos list</h1>
        <div style={{display:"flex"}}>
        <input type="text" style={{width:"444px",padding:"15px",  border:"1px solid black",borderRadius:"33px"}} placeholder='add your task'/>
        <button style={{backgroundColor:"orangered", marginLeft:"-86px",borderRadius:"22px",border:"none",color:"white",padding:"14px 29px"}}>ADD</button>
        </div>
        <ul style={{listStyle:"none",marginLeft:"-436px",lineHeight:"33px"}}>
            <li>
                <input id="1" type="checkbox" />
                <label htmlFor='1'>My Task 1</label>
                 </li>
            <li><input type="checkbox" />My Task 2</li>
            <li><input type="checkbox" />My Task 3</li>
            <li><input type="checkbox" />My Task 4</li>
        </ul>
        {/* {name} */}
        </div>
    );
}
export default Todoos;