import React, { Component } from 'react';
import axios from 'axios';
import './guess-answer.css';

export default class GuessAnswer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsersAnswer = this.onChangeUsersAnswer.bind(this);
    
    this.state = {
      UsersAnswer: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const Answer = {
        UsersAnswer: this.state.UsersAnswer
    }

    console.log(Answer);

    // axios.get('http://localhost:5000/users', Answer)
    //   .then(res => console.log(res.data));

    this.setState({
        UsersAnswer: ''
    })
  }

  onChangeUsersAnswer(e) {
    this.setState({
        UsersAnswer: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Guess Answer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="guessAnswer"> 
            <label>Guess here: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.UsersAnswer}
                onChange={this.onChangeUsersAnswer}
                />
          </div>
          <div className="guessAnswerButton">
            <input type="submit" value="Submit Answer" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
