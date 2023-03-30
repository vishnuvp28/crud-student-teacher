import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";
import { teacherData } from "./teacherdata";

export function AddTeacher({teacher,setTeacher}) {


  const history=useHistory();


    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[standard,setStandard]=useState('');
    const[subject,setSubject]=useState('');
    const[address,setAddress]=useState('');
    const[email,setEmail]=useState('');
    const[contact,setContact]=useState('');

    const addStudUser=()=>{
        const newUser ={
            id,
            name,
            standard,
            subject,
            address,
            email,
            contact
        }
        console.log(newUser);
        setTeacher([...teacher,newUser])
        history.push('/teacher')
    }
   

  return (
    <Base>
        <div><h1>Add Teacher</h1>
        <div className="form">
        
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Enter ID"  onChange={((e)=>setId(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  onChange={((e)=>setName(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Enter Standard" onChange={((e)=>setStandard(e.target.value))}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter Subject"  onChange={((e)=>setSubject(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter Address"  onChange={((e)=>setAddress(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={((e)=>setEmail(e.target.value))}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Enter Contact"  onChange={((e)=>setContact(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={addStudUser}>
            Submit
          </Button>
        </Form>
      </div>
   </div>
    </Base>
  );
}
