import { useHistory } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Button from 'react-bootstrap/Button';


export function Base({ children, title }) {
  const history = useHistory();
  return (

    <div>   
 
       <div className="nav-styles">
     
      <span>
          <Button variant="dark" 
            className="nav-buttons"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
        </span>
        <span>
          <Button variant="dark"
            className="nav-buttons"
            onClick={() => history.push("/student")}
          >
            Student
          </Button>
        </span>
        <span>
          <Button variant="dark"
            className="nav-buttons"
            onClick={() => history.push("/teacher")}
          >
            Teacher
          </Button>
         
        

        </span>

         </div>
        
        
         <div className="title">{title}</div> 
      <div>{children}</div>
      </div>
    

    
  );
}
