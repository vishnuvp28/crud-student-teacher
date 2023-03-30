// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Base } from "./Base";
import { styled } from "@mui/material/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from 'react-bootstrap/Button';
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export function Student({student,setStudent}) {
  const history=useHistory();
// const[user,setUser]=useState(data)
  const deleteUser = (person)=>{
    const alterList=student.filter((per)=>per.id !== person)
    setStudent(alterList)
  }

  return (
  <Base>
      <div className="data">
        <h1>Student</h1><br></br>

     <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STANDARD</StyledTableCell>
              <StyledTableCell>BATCH</StyledTableCell>
              <StyledTableCell>ADDRESS</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>CONTACT</StyledTableCell>
              <StyledTableCell>ACTION</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((std,idx) => (
              <StyledTableRow key={idx} idx={idx} >
                <StyledTableCell component="th" scope="row">
                  {std.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.standard}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.batch}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.address}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.contact}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton variant="contained" color="success" onClick={() => history.push(`/editstudent/${std.id}`)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="primary"  onClick={()=>history.push(`/viewstudent/${idx}`)}>
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton variant="contained" color="error" onClick={()=>deleteUser(std.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    
           
    <div className="btn">  <Button onClick={()=>history.push('/add/student')}>Create new user</Button></div>

    </div>
    </Base>
    
  );
}
