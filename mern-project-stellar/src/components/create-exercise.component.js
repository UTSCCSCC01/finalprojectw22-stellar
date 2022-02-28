import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
    
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: '',
          users: []
        }
      }

      //react lifecycle method. (react will automatically call the method below)
      componentDidMount(){
        this.setState({
          users: ['test user'],
          username: "test user"
        })
      }

      setUsername(e){
        this.setState({
          username: e.target.value
        });
      }
      
      setPassword(e){
        this.setState({
          password: e.target.value
        });
      }

      onSubmit(e){
        e.preventDefault();
        const exercise = {
          username: this.state.username,
          password: this.state.password 
        }
        console.log(exercise);
        window.location = '/';
      }

    render() {
        return (
          <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            {/* <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            /> */}
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
      }
    }