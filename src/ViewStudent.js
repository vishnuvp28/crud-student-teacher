import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Base } from "./Base";

export function ViewStudent({ student }) {
    const history=useHistory();

  const { id } = useParams();
  const std = student[id];
  console.log(std.id)
  return (
    <Base>
      <div className="View">
        <div>
          <h1>View Student</h1>
        </div>
        <br></br>
        <div className="card">
        <div className="user-card">
        <h2>{std.name}</h2>
         <p>Id : {std.id}</p>
          <p>Std : {std.standard}</p>
          <p>Sub : {std.subject}</p>
          <p>Add : {std.address}</p>
          <p>Email: {std.email}</p>
          <p>Contact : {std.contact}</p>
          </div>
        </div>
        <br></br>
        <Button variant="dark" onClick={()=>history.push('/student')}>Back</Button>

      </div>
    </Base>
  );
}
