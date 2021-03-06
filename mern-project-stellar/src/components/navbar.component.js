import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Stellar</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li> */}
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/game-browser" className="nav-link">Games</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/lobby" className="nav-link">Create Game</Link>
          </li> */}
          {/* <li className="navbar-item">
          <Link to="/guess" className="nav-link">Guess Answer</Link>
          </li> */}

          <li className="navbar-item">
          <Link to="/boardpage" className="nav-link">Board Page</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
