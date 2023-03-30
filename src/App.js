// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { EditStudent } from "./EditStudent";
import { EditTeacher } from "./EditTeacher";
import { teacherData } from "./teacherdata";
import { data } from "./data";
import { ViewStudent } from "./ViewStudent";
import { ViewTeacher } from "./ViewTeacher";

export function App() {
  const [teacher, setTeacher] = useState(teacherData);

  const [student, setStudent] = useState(data);
console.log(student)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard  />
        </Route>

        <Route path="/student">
          <Student student={student} setStudent={setStudent} />
        </Route>

        <Route path="/teacher">
          <Teacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path="/add/student">
          <AddStudent student={student} setStudent={setStudent} />
        </Route>

        <Route path="/add/teacher">
          <AddTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path="/editstudent/:id">
          <EditStudent student={student} setStudent={setStudent}/>
        </Route>

        <Route path="/editteacher/:id">
          <EditTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path="/viewstudent/:id">
          <ViewStudent student={student} setStudent={setStudent}/>
        </Route>

        <Route path="/viewteacher/:id">
          <ViewTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
