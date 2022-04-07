import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './board-page.css';
import axios from 'axios';

//dependency library requirement: run "npm install @mui/material @emotion/react @emotion/styled" to get library for styling some buttons

export default class BoardPage extends Component {
    
  constructor(props) {
    
    

    super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeUsersAnswer = this.onChangeUsersAnswer.bind(this);
      this.state = {
        //variables for keeping track of player scores and turn state
        player1Score: 0,
        player2Score: 0,
        player3Score: 0,
        player4Score: 0,
        UsersAnswer: '',
        CorrectAnswer: '',
        ToAddOrSubtractPoints: 0,
        // Answered: false,
        turn: 1,
        //boolean state trackers for each question. Changes state from available to disabled when a button a question is selection
        available11: true, available12: true, available13: true, available14: true, available15: true,
        available21: true, available22: true, available23: true, available24: true, available25: true,
        available31: true, available32: true, available33: true, available34: true, available35: true,
        available41: true, available42: true, available43: true, available44: true, available45: true,
        available51: true, available52: true, available53: true, available54: true, available55: true,
      };
  }

  //functions for increasing and decreasing score of players
  //tentative page function to allow for score testing. Once hooked up with question backend, the score for questions will be pulled from there and this
  //function will be automated accordingly

  Player1Inc = () => {this.setState({ player1Score: this.state.player1Score + 100 });}
  Player1Dec = () => {this.setState({ player1Score: this.state.player1Score - 100 });}

  Player2Inc = () => {this.setState({ player2Score: this.state.player2Score + 100 });}
  Player2Dec = () => {this.setState({ player2Score: this.state.player2Score - 100 });}

  Player3Inc = () => {this.setState({ player3Score: this.state.player3Score + 100 });}
  Player3Dec = () => {this.setState({ player3Score: this.state.player3Score - 100 });}

  Player4Inc = () => {this.setState({ player4Score: this.state.player4Score + 100 });}
  Player4Dec = () => {this.setState({ player4Score: this.state.player4Score - 100 });}

  //functions for changing each state of each available button/question available on the board
  //if the question has been previously prompted, it will be unavailable for usage as it will be disabled
  //creates an alert popup to indicate correct state change from available to disabled

  changeState11(){if (this.state.available11 === true){this.setState({available11: false});this.questionSelect("1", "1");}}
  changeState12(){if (this.state.available12 === true){this.setState({available12: false});this.questionSelect("1", "2");}}
  changeState13(){if (this.state.available13 === true){this.setState({available13: false});this.questionSelect("1", "3");}}
  changeState14(){if (this.state.available14 === true){this.setState({available14: false});this.questionSelect("1", "4");}}
  changeState15(){if (this.state.available15 === true){this.setState({available15: false});this.questionSelect("1", "5");}}

  changeState21(){if (this.state.available21 === true){this.setState({available21: false});this.questionSelect("2", "1");}}
  changeState22(){if (this.state.available22 === true){this.setState({available22: false});this.questionSelect("2", "2");}}
  changeState23(){if (this.state.available23 === true){this.setState({available23: false});this.questionSelect("2", "3");}}
  changeState24(){if (this.state.available24 === true){this.setState({available24: false});this.questionSelect("2", "4");}}
  changeState25(){if (this.state.available25 === true){this.setState({available25: false});this.questionSelect("2", "5");}}

  changeState31(){if (this.state.available31 === true){this.setState({available31: false});this.questionSelect("3", "1");}}
  changeState32(){if (this.state.available32 === true){this.setState({available32: false});this.questionSelect("3", "2");}}
  changeState33(){if (this.state.available33 === true){this.setState({available33: false});this.questionSelect("3", "3");}}
  changeState34(){if (this.state.available34 === true){this.setState({available34: false});this.questionSelect("3", "4");}}
  changeState35(){if (this.state.available35 === true){this.setState({available35: false});this.questionSelect("3", "5");}}

  changeState41(){if (this.state.available41 === true){this.setState({available41: false});this.questionSelect("4", "1");}}
  changeState42(){if (this.state.available42 === true){this.setState({available42: false});this.questionSelect("4", "2");}}
  changeState43(){if (this.state.available43 === true){this.setState({available43: false});this.questionSelect("4", "3");}}
  changeState44(){if (this.state.available44 === true){this.setState({available44: false});this.questionSelect("4", "4");}}
  changeState45(){if (this.state.available45 === true){this.setState({available45: false});this.questionSelect("4", "5");}}

  changeState51(){if (this.state.available51 === true){this.setState({available51: false});this.questionSelect("5", "1");}}
  changeState52(){if (this.state.available52 === true){this.setState({available52: false});this.questionSelect("5", "2");}}
  changeState53(){if (this.state.available53 === true){this.setState({available53: false});this.questionSelect("5", "3");}}
  changeState54(){if (this.state.available54 === true){this.setState({available54: false});this.questionSelect("5", "4");}}
  changeState55(){if (this.state.available55 === true){this.setState({available55: false});this.questionSelect("5", "5");}}

  //function to be called when an available question is selected. Creates a tentative popup where the question prompt will later (different user story) be used to get input from user
  //this function also cycles player turns when an available question is selected

  questionSelect = (category, difficulty) => {

    axios.get('http://localhost:5000/questions')
      .then(res => {
          console.log(res.data);
          console.log(this.state.UsersAnswer);
          
          for (let i = 0; i < res.data.length; i++){
            if (res.data[i].category === category && res.data[i].difficulty === difficulty){
              alert('You have selected category: ' + category + " for: " + difficulty + "00." +
                    "\nQuestion: \n" + res.data[i].question);
              this.setState({ CorrectAnswer: res.data[i].answer })
              this.setState({ ToAddOrSubtractPoints: parseInt(res.data[i].difficulty) * 100})
            }
          }
      });

    this.setState({ turn: this.state.turn + 1 });
    
    if (this.state.turn == 4){
      this.setState({ turn: 1 })
    }
  }

  //The Client's answer is stored on the variable to be used by us.
  onChangeUsersAnswer(e) {
    console.log("we are in changeUserAnswer");
    this.setState({
        UsersAnswer: e.target.value
    })
  }

  onSubmit(e) {
    console.log("we are in onSubmit");
    e.preventDefault();
    // let playerList = ["player1Score", "player2Score", "player3Score", "player4Score"];
    // let playersListScore = [this.state.player1Score, this.state.player2Score, this.state.player3Score, this.state.player4Score];

    if (this.state.CorrectAnswer === this.state.UsersAnswer){
      alert("correct!");
      if (this.state.turn == 1){
        this.setState({ player4Score: this.state.player4Score + this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 2){
        this.setState({ player1Score: this.state.player1Score + this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 3){
        this.setState({ player2Score: this.state.player2Score + this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 4){
        this.setState({ player3Score: this.state.player3Score + this.state.ToAddOrSubtractPoints});
      }
      // this.setState({ playerList[this.state.turn]: playersListScore[this.state.turn] + this.state.ToAddOrSubtractPoints});
      this.setState({ CorrectAnswer: '' })
      this.setState({ ToAddOrSubtractPoints: 0 })
    
    }
    else if (this.state.CorrectAnswer !== this.state.UsersAnswer){
      this.setState({ turn: this.state.turn + 1 });
      if (this.state.turn == 4){
        this.setState({ turn: 1 })
      }
      alert("The answer is incorrect");
      if (this.state.turn == 1){
        this.setState({ player4Score: this.state.player4Score - this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 2){
        this.setState({ player1Score: this.state.player1Score - this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 3){
        this.setState({ player2Score: this.state.player2Score - this.state.ToAddOrSubtractPoints});
      }
      else if (this.state.turn == 4){
        this.setState({ player3Score: this.state.player3Score - this.state.ToAddOrSubtractPoints});
      }
      // this.setState({ player1Score: this.state.player1Score - this.state.ToAddOrSubtractPoints});
    }


    // axios.get('http://localhost:5000/questions', Answer)
    //   .then(res => console.log(res.data));

    // this.setState({
    //     UsersAnswer: ''
    // })
  }


    render() {

      //the available state and disabled state for each button is defined here
      //these states are changed via the changeStateXX() functions for each associated question when they are selected during availability

      let btn_class11 = this.state.available11 ? "availableButton" : "disabledButton";
      let btn_class12 = this.state.available12 ? "availableButton" : "disabledButton";
      let btn_class13 = this.state.available13 ? "availableButton" : "disabledButton";
      let btn_class14 = this.state.available14 ? "availableButton" : "disabledButton";
      let btn_class15 = this.state.available15 ? "availableButton" : "disabledButton";

      let btn_class21 = this.state.available21 ? "availableButton" : "disabledButton";
      let btn_class22 = this.state.available22 ? "availableButton" : "disabledButton";
      let btn_class23 = this.state.available23 ? "availableButton" : "disabledButton";
      let btn_class24 = this.state.available24 ? "availableButton" : "disabledButton";
      let btn_class25 = this.state.available25 ? "availableButton" : "disabledButton";

      let btn_class31 = this.state.available31 ? "availableButton" : "disabledButton";
      let btn_class32 = this.state.available32 ? "availableButton" : "disabledButton";
      let btn_class33 = this.state.available33 ? "availableButton" : "disabledButton";
      let btn_class34 = this.state.available34 ? "availableButton" : "disabledButton";
      let btn_class35 = this.state.available35 ? "availableButton" : "disabledButton";

      let btn_class41 = this.state.available41 ? "availableButton" : "disabledButton";
      let btn_class42 = this.state.available42 ? "availableButton" : "disabledButton";
      let btn_class43 = this.state.available43 ? "availableButton" : "disabledButton";
      let btn_class44 = this.state.available44 ? "availableButton" : "disabledButton";
      let btn_class45 = this.state.available45 ? "availableButton" : "disabledButton";

      let btn_class51 = this.state.available51 ? "availableButton" : "disabledButton";
      let btn_class52 = this.state.available52 ? "availableButton" : "disabledButton";
      let btn_class53 = this.state.available53 ? "availableButton" : "disabledButton";
      let btn_class54 = this.state.available54 ? "availableButton" : "disabledButton";
      let btn_class55 = this.state.available55 ? "availableButton" : "disabledButton";

        return (
          <div className="login-wrapper">
          <div id="parent">
          
          
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Box
              sx={{
                display: 'flex',
                '& > *': {
                  m: 1,
                },
              }}
            >
                
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Math</h1></div>
                {[
                <button key="1:100" size="large" className={btn_class11} onClick={this.changeState11.bind(this)}><h2>100</h2></button>,
                <button key="1:200" size="large" className={btn_class12} onClick={this.changeState12.bind(this)}><h2>200</h2></button>,
                <button key="1:300" size="large" className={btn_class13} onClick={this.changeState13.bind(this)}><h2>300</h2></button>,
                <button key="1:400" size="large" className={btn_class14} onClick={this.changeState14.bind(this)}><h2>400</h2></button>,
                <button key="1:500" size="large" className={btn_class15} onClick={this.changeState15.bind(this)}><h2>500</h2></button>,
                ]}
              </ButtonGroup>
              
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Geography </h1></div>
                {[
                <button key="2:100" size="large" className={btn_class21} onClick={this.changeState21.bind(this)}><h2>100</h2></button>,
                <button key="2:200" size="large" className={btn_class22} onClick={this.changeState22.bind(this)}><h2>200</h2></button>,
                <button key="2:300" size="large" className={btn_class23} onClick={this.changeState23.bind(this)}><h2>300</h2></button>,
                <button key="2:400" size="large" className={btn_class24} onClick={this.changeState24.bind(this)}><h2>400</h2></button>,
                <button key="2:500" size="large" className={btn_class25} onClick={this.changeState25.bind(this)}><h2>500</h2></button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Science</h1></div>
                {[
                <button key="3:100" size="large" className={btn_class31} onClick={this.changeState31.bind(this)}><h2>100</h2></button>,
                <button key="3:200" size="large" className={btn_class32} onClick={this.changeState32.bind(this)}><h2>200</h2></button>,
                <button key="3:300" size="large" className={btn_class33} onClick={this.changeState33.bind(this)}><h2>300</h2></button>,
                <button key="3:400" size="large" className={btn_class34} onClick={this.changeState34.bind(this)}><h2>400</h2></button>,
                <button key="3:500" size="large" className={btn_class35} onClick={this.changeState35.bind(this)}><h2>500</h2></button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>French</h1></div>
                {[
                <button key="4:100" size="large" className={btn_class41} onClick={this.changeState41.bind(this)}><h2>100</h2></button>,
                <button key="4:200" size="large" className={btn_class42} onClick={this.changeState42.bind(this)}><h2>200</h2></button>,
                <button key="4:300" size="large" className={btn_class43} onClick={this.changeState43.bind(this)}><h2>300</h2></button>,
                <button key="4:400" size="large" className={btn_class44} onClick={this.changeState44.bind(this)}><h2>400</h2></button>,
                <button key="4:500" size="large" className={btn_class45} onClick={this.changeState45.bind(this)}><h2>500</h2></button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>English</h1></div>
                {[
                <button key="5:100" size="large" className={btn_class51} onClick={this.changeState51.bind(this)}><h2>100</h2></button>,
                <button key="5:200" size="large" className={btn_class52} onClick={this.changeState52.bind(this)}><h2>200</h2></button>,
                <button key="5:300" size="large" className={btn_class53} onClick={this.changeState53.bind(this)}><h2>300</h2></button>,
                <button key="5:400" size="large" className={btn_class54} onClick={this.changeState54.bind(this)}><h2>400</h2></button>,
                <button key="5:500" size="large" className={btn_class55} onClick={this.changeState55.bind(this)}><h2>500</h2></button>,
                ]}
              </ButtonGroup>
              
            </Box>
            
            </div>

            <div>
              <h3>Guess Answer Below</h3>
              <h4>What is a...</h4>
              <form >
                {/* <div className="guessAnswer"> 
                <label>Guess here: </label>
                <input  type="text"
                  required
                  className="form-control"
                  value={this.state.UsersAnswer}
                  // onChange={this.onChangeUsersAnswer}
                  />
                </div>
                <div className="guessAnswerButton">
                  <input type="submit" value="Submit Answer" className="btn btn-primary" />
                </div> */}
              
              <label>
              <input type="text" 
              value={this.state.UsersAnswer}
              onChange={this.onChangeUsersAnswer}/>
                </label>
                <div>
                  <button onClick={this.onSubmit} type="submit">Guess Answer</button>
                </div>
              
              
              </form>
            </div>

            <div>
            {
              <h2>Turn: P{ this.state.turn }</h2>}
              </div>
            {/* <ButtonGroup
                size="small"
                orientation="horizontal"
                aria-label="horizontal outlined button group"
              > */}
            {/* <Button variant="contained" color="success" onClick={this.Player1Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player1Dec}>-100</Button> */}
            {<h2>P1 Score: { this.state.player1Score }</h2>}

            {/* <Button variant="contained" color="success" onClick={this.Player2Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player2Dec}>-100</Button> */}
            {<h2>P2 Score: { this.state.player2Score }</h2>}

            {/* <Button variant="contained" color="success" onClick={this.Player3Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player3Dec}>-100</Button> */}
            {<h2>P3 Score: { this.state.player3Score }</h2>}

            {/* <Button variant="contained" color="success" onClick={this.Player4Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player4Dec}>-100</Button> */}
            {<h2>P4 Score: { this.state.player4Score }</h2>}
            {/* </ButtonGroup> */}

            </div>
            </div>
          );
          
      }
    }
