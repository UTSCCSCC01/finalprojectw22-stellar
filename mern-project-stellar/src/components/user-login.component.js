import React, { Component, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './user-login.css';
// import PropTypes from 'prop-types';
// import App from "../App.js";
import { Link, useNavigate } from "react-router-dom";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.redirectToHomepage = this.redirectToHomepage.bind(this);
    // this.redirectToCreateUser = this.redirectToCreateUser.bind(this);
    
    this.state = {
      username: '',
      password: ''
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  
  

  onSubmit(e) {
    
    e.preventDefault();
    
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    // const [current_username, setUsername] = useState();
    // const [current_password, setPassword] = useState();
    // setUsername(user.username);
    // setPassword(user.password);

    console.log(user);
    
    let logins = [];
    axios.get('http://localhost:5000/users')
      .then(res => {
          console.log(res.data);
           logins = res.data.slice();
          this.setState({ logins });
        console.log("logins data");
        console.log(logins);


        const loggedin = user;
        

        //   const test = res.data.find({username: user.username})
          console.log("found user?");
          
          for (let i = 0; i < res.data.length; i++){
            if (res.data[i].username === user.username && res.data[i].password === user.password){
                console.log("we got the user!");
                //let the user login here!
                this.props.setLogin(loggedin);
                this.props.setCreateUser("true");
                // setLogin(loggedin);
            }
            else{
                console.log("invalid username or password.")
                    // navigate("/");

                    //  return (
                    //     <h1>incorrect password</h1>
                    //  )   
                
            }
        }
      });
    //   console.log("looping");
    //   for (let i = 0; i < logins.length; i++){
    //     console.log("looping");
    //     if (logins[i].username === user.username && logins[i].password === user.password){
    //         console.log("we got the user!");
    //         //let the user login here!
    //     }
    //     else{
    //         console.log("invalid username or password.")
    //             // navigate("/");

    //             //  return (
    //             //     <h1>incorrect password</h1>
    //             //  )   
            
    //     }
    // }


    //   const test = logins.find({username: user.username})
    //   console.log("found user?");
    //   console.log(test);
 



    //   for (let i = 0; i < logins.length; i++){
    //     if (logins[i].username == user.username){
    //         console.log("we got the user!");
    //     }
    //     console.log(user);
    //   }
    // this.setState({
    //   username: '',
    //   password: ''
    // })
  }

  redirectToHomepage(e) {
    e.preventDefault();
    const user = {
        username: "Guest",
        password: ""
      }
    
    const loggedin = user;
   
    this.props.setLogin(user);
    this.props.setCreateUser("true");
  }
  
//   redirectToCreateUser(e) {
//     // this.props.setLogin("test");
//     // this.props.setCreateUser("test");
//     return <Link to="/user"></Link>
//   }
    
redirectToCreateUser = () => {
    let navigate  = useNavigate();
    navigate("/user");
};

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
            <button onClick={this.onSubmit} type="submit">Login</button>
          </div>
          <div>
            <button onClick={this.redirectToHomepage} type="submit">Login as Guest</button>
            {/* <button onClick={this.redirectToCreateUser} type="submit">Create Account</button> */}
            <button onClick={this.redirectToCreateUser} type="submit">Create Account</button>
            {/* <button const path = '/user' type="submit">Create Account</button> */}
            {/* <Link to="/user" className="btn btn-primary">Create Account</Link> */}
          </div>
          <div>    
          <Link to="/user" className="btn btn-primary">Create Account</Link>
          </div>
        </form>
        </div>
      )
  }
}

// UserLogin.PropTypes = {
//     setLogin: PropTypes.func.isRequired
// };

// UserLogin.propTypes = {
//     setLogin: PropTypes.func.isRequired
//   };

// var x = new UserLogin();
// x.setLogin();