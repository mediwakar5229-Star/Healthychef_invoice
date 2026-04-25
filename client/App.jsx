import { useState } from "react";
import axios from "axios";

export default function App(){
 const [name,setName]=useState("");
 const [items,setItems]=useState([]);

 const addItem=async()=>{
  const res=await axios.post("http://localhost:5000/api/items",{name,basePrice:100});
  setItems([...items,res.data]);
 }

 return(
  <div style={{padding:20}}>
   <h1>Invoice App</h1>
   <input onChange={e=>setName(e.target.value)} placeholder="Item"/>
   <button onClick={addItem}>Add</button>
   <ul>
    {items.map(i=><li key={i._id}>{i.name}</li>)}
   </ul>
  </div>
 );
}
