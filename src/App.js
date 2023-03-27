// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import  Dashboard  from './Dashboard';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { AddStudent } from './AddStudent';
import { AddTeacher } from './AddTeacher';
import { EditStudent } from './EditStudent';
import { EditTeacher } from './EditTeacher';
// import { teacherData } from './teacherdata';
import { data } from './data';

export function App() {
  const [user, setUser] = useState(data)
  return (

    <div className="App">

    
     <Switch>

       <Route exact path='/'>
        <Dashboard
        user={user}
        setUser={setUser}/>
       </Route>

       <Route path='/student'>
        <Student
        user={user}
        setUser={setUser}/>
       </Route>
       
       <Route path='/teacher'>
        <Teacher
        user={user}
        setUser={setUser}/>
       </Route>

       <Route path='/add/teacher'>
        <AddTeacher
        user={user}
        setUser={setUser}/>
       </Route>

       
       <Route path='/add/student'>
        <AddStudent
         user={user}
        setUser={setUser}
     />
       </Route>

       <Route path='/edit/student'>
        <EditStudent user={user}
        setUser={setUser}/>
       </Route>

       <Route path='/edit/teacher'>
        <EditTeacher user={user}
        setUser={setUser}/>
       </Route>

     </Switch>
   
    </div>
  );
}

export default App;
