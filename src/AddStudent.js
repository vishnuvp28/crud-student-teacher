import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { Base } from "./Base";
import { data } from "./data";
import TextField from '@mui/material/TextField';


export function AddStudent({user,setUser}){
const history=useHistory();


    const[id,setId]=useState();
    const[name,setName]=useState();
    const[standard,setStandard]=useState();
    const[subject,setSubject]=useState();
    const[address,setAddress]=useState();
    const[email,setEmail]=useState();
    const[contact,setContact]=useState();

    const addStudUser=()=>{

    const newUser={
      id,
      name,
      standard,
      subject,
      address,
      email,
      contact
}
console.log(newUser);
setUser([...user,newUser])
history.push('/student')
}


    return(
        <Base>
        
        <div><h1>Add Student</h1>
      
<div className="form">
        <TextField id="outlined-basic" label="Id" variant="outlined" onChange={((e)=>setId(e.target.value))} />
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={((e)=>setName(e.target.value))} />

        <TextField id="outlined-basic" label="Standard" variant="outlined" onChange={((e)=>setStandard(e.target.value))} />

        <TextField id="outlined-basic" label="Subject" variant="outlined" onChange={((e)=>setSubject(e.target.value))} />

        <TextField id="outlined-basic" label="Address" variant="outlined" onChange={((e)=>setAddress(e.target.value))} />
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={((e)=>setEmail(e.target.value))} />
        <TextField id="outlined-basic" label="Contact" variant="outlined" onChange={((e)=>setContact(e.target.value))} />



        <Button variant="dark" type="submit" onClick={addStudUser} >
          Add Student
          </Button>
   
          </div>
   </div>
    </Base>

    )
}