import React, { useState } from "react";
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
import { teacherData } from "./teacherdata";
import { useHistory } from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';




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
export function Teacher() {
  const [user, setUser] = useState(teacherData);
  const history=useHistory();

  const deleteUser = (person)=>{
    const alterList=user.filter((per)=>per.id !== person)
    setUser(alterList)
  }

  return (
  <Base>
      <div className="data">
        <h1>Teacher</h1><br></br>
        
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STANDARD</StyledTableCell>
              <StyledTableCell>SUBJECT</StyledTableCell>
              <StyledTableCell>ADDRESS</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>CONTACT</StyledTableCell>
              <StyledTableCell>ACTION</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((std,index) => (
              <StyledTableRow key={index}>
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
                  {std.subject}
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
                  <IconButton variant="contained" color="success" onClick={() => history.push("/edit/teacher")}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="black" >
                    <ViewListIcon></ViewListIcon>
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
    <div className="btn">  <Button onClick={()=>history.push('/add/teacher')}>Create new user</Button></div>
  
    </Base>
    
  );
}
