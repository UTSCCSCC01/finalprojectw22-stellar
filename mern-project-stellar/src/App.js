// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import UserLogin from "./components/user-login.component.js";
import GuessAnswer from "./components/guess-answer.component.js";


function App() {
  const [loggedin, setLogin] = useState();
  const [User, setCreateUser] = useState();

  if (!loggedin){
    return <Router>
      <Routes>
      {/* <UserLogin setLogin = {setLogin} setCreateUser = {setCreateUser} /> */}
        <Route path="/" element={<UserLogin setLogin = {setLogin} setCreateUser = {setCreateUser}/>} />
        <Route path="/user" element={<CreateUser/>} />
      </Routes>
  </Router>
  }
  
  // if (!User){
  //   return <Router>
  //     {/* <Routes> */}
  //     <CreateUser setCreateUser = {setCreateUser} />
  //     {/* <Route path="/user" element={<CreateUser/>} /> */}
  //     {/* </Routes> */}
  // </Router>
  // }


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ExercisesList/>} />
        <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/guess" element={<GuessAnswer/>} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
