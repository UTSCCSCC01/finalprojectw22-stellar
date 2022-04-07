// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Lobby from "./components/lobby.component";
import GameBrowser from "./components/game-browser.component";
import UserLogin from "./components/user-login.component.js";
import GuessAnswer from "./components/guess-answer.component.js";
import BoardPage from "./components/board-page.component";



function App() {
  const [loggedin, setLogin] = useState();

  const id = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)

//User is first directed to the login page and it does not allow the user to access certain pages until they login
  if (!loggedin){
    return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin setLogin = {setLogin}/>} />
        <Route path="/user" element={<CreateUser/>} />
      </Routes>
  </Router>
  );
}

  return (
    
    <Router>
      <h1> {loggedin.username} </h1>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ExercisesList/>} />
        
        <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} />
        <Route path="/lobby/:id" element={<Lobby id={id}/>} />
        <Route path="/game-browser" element={<GameBrowser id={id}/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/guess" element={<GuessAnswer/>} />
        <Route path="/boardpage" element={<BoardPage/>} />
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
