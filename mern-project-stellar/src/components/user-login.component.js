import React, { Component, useState } from 'react';
import axios from 'axios';
import './user-login.css';
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.LoggedInRedirect = this.LoggedInRedirect.bind(this);
    this.LoggedInAsGuestRedirect = this.LoggedInAsGuestRedirect.bind(this);
    // this.redirectToCreateUser = this.redirectToCreateUser.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }
  //The Client's username is stored on the variable to be used by us.
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  //The Client's password is stored on the variable to be used by us.
  onChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  

  //Redirect the user to the home page if they logged in sucessfully, if not then reject their login.
  LoggedInRedirect(e) {
    
    e.preventDefault();
    
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    // const [User, setUsername] = useState();
    // setUsername(user.username);
    
    console.log(user);

    let logins = [];
    axios.get('http://localhost:5000/users')
      .then(res => {
          console.log(res.data);
          logins = res.data.slice();
          this.setState({ logins });
          console.log(logins);
          const loggedin = user;
      
          for (let i = 0; i < logins.length; i++){
            if (logins[i].username === user.username && logins[i].password === user.password){
                console.log("we found a match for the username and password in the database.");
                //let the user login here!
                this.props.setLogin(loggedin);
            }
            else{
                console.log("invalid username or password.")
                
            }
        }
      });
  }
//redirecting the user to the homepage logged in as a guest.
  LoggedInAsGuestRedirect(e) {
    e.preventDefault();
    const user = {
        username: "Guest",
        password: ""
      }

    const loggedin = user;
    this.props.setLogin(user);
  }
  
//   redirectToCreateUser(e) {
//     // this.props.setLogin("test");
//     // this.props.setCreateUser("test");
//     return <Link to="/user"></Link>
//   }
    
// redirectToCreateUser = () => {
//     // let navigate  = useNavigate();
//     navigate("/user");
// };

//Rendering the login page here
  render() {
    return(
        <div className="login-wrapper">
        <h1>Welcome to Stellar Jeopardy</h1>
        <h2>Please Log In</h2>
        <form >
          <label>
            <p>Username</p>
            <input type="text" 
            value={this.state.username}
            onChange={this.onChangeUsername}/>
          </label>
          <div>
          <label>
            <p>Password</p>
            <input type="password" 
            value={this.state.password}
            onChange={this.onChangePassword}/>
          </label>
          </div>
          <div>
            <button onClick={this.LoggedInRedirect} type="submit">Login</button>
          </div>
          <div>
            <button onClick={this.LoggedInAsGuestRedirect} type="submit">Login as Guest</button>
            {/* <button onClick={this.redirectToCreateUser} type="submit">Create Account</button> */}
          </div>
          <div>    
          <Link to="/user" className="form-control round-lg">Create Account</Link>
          </div>
        </form>
        </div>
      )
  }
}