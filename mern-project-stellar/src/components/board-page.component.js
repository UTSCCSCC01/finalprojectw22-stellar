import React, { Component } from 'react';
//import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
// import PopUp from "./PopUp";


export default class BoardPage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      player1Score: 0,
      player2Score: 0,
      player3Score: 0,
      player4Score: 0,
      turn: 1
      //show: true
    };
  }
  
  Player1Inc = () => {
    this.setState({ player1Score: this.state.player1Score + 100 });
  }
  Player1Dec = () => {
    this.setState({ player1Score: this.state.player1Score - 100 });
  }

  Player2Inc = () => {
    this.setState({ player2Score: this.state.player2Score + 100 });
  }
  Player2Dec = () => {
    this.setState({ player2Score: this.state.player2Score - 100 });
  }

  Player3Inc = () => {
    this.setState({ player3Score: this.state.player3Score + 100 });
  }
  Player3Dec = () => {
    this.setState({ player3Score: this.state.player3Score - 100 });
  }

  Player4Inc = () => {
    this.setState({ player4Score: this.state.player4Score + 100 });
  }
  Player4Dec = () => {
    this.setState({ player4Score: this.state.player4Score - 100 });
  }

  questionSelect = () => {
    alert('Prompt Question / Show Answer Here for Question');
    this.setState({ turn: this.state.turn + 1 });
    if (this.state.turn == 4){
      this.setState({ turn: 1 })
    }
  }
  //ToggleClick = () => {
  //  this.setState({ show: !this.state.show });
  //}

    //onChangePlayer1Score(e) {
    //    this.setState({
    //      player1Score: e + 100
    //    })
    //  }
      

      //}
      //state = {
      //  seen: false
      //};
    
      //togglePop = () => {
      //  this.setState({
      //    seen: !this.state.seen
      //  });
      //};


    render() {
        return (
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
                  <div><h1>Category 1</h1></div>
                {[
                <Button id="1:100" size="large" onClick={this.questionSelect}><h2>100</h2></Button>,
                <Button key="1:200" size="large"><h2>200</h2></Button>,
                <Button key="1:300" size="large"><h2>300</h2></Button>,
                <Button key="1:400" size="large"><h2>400</h2></Button>,
                <Button key="1:500" size="large"><h2>500</h2></Button>,
                ]}
              </ButtonGroup>
              
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Category 2</h1></div>
                {[
                <Button key="2:100" size="large"><h2>100</h2></Button>,
                <Button key="1:200" size="large"><h2>200</h2></Button>,
                <Button key="1:300" size="large"><h2>300</h2></Button>,
                <Button key="1:400" size="large"><h2>400</h2></Button>,
                <Button key="1:500" size="large"><h2>500</h2></Button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Category 3</h1></div>
                {[
                <Button key="2:100" size="large"><h2>100</h2></Button>,
                <Button key="1:200" size="large"><h2>200</h2></Button>,
                <Button key="1:300" size="large"><h2>300</h2></Button>,
                <Button key="1:400" size="large"><h2>400</h2></Button>,
                <Button key="1:500" size="large"><h2>500</h2></Button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Category 4</h1></div>
                {[
                <Button key="2:100" size="large"><h2>100</h2></Button>,
                <Button key="1:200" size="large"><h2>200</h2></Button>,
                <Button key="1:300" size="large"><h2>300</h2></Button>,
                <Button key="1:400" size="large"><h2>400</h2></Button>,
                <Button key="1:500" size="large"><h2>500</h2></Button>,
                ]}
              </ButtonGroup>
        
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                  <div><h1>Category 5</h1></div>
                {[
                <Button key="2:100" size="large"><h2>100</h2></Button>,
                <Button key="1:200" size="large"><h2>200</h2></Button>,
                <Button key="1:300" size="large"><h2>300</h2></Button>,
                <Button key="1:400" size="large"><h2>400</h2></Button>,
                <Button key="1:500" size="large"><h2>500</h2></Button>,
                ]}
              </ButtonGroup>
              
            </Box>

            {/*
            <div>
            <div className="btn" onClick={this.togglePop}>
            <button>Test popup</button>
             </div>
             {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
             </div>
              */}

            </div>
            <Button variant="contained" color="success" onClick={this.Player1Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player1Dec}>-100</Button>
            {<h2>Player 1 Score: { this.state.player1Score }</h2>}

            <Button variant="contained" color="success" onClick={this.Player2Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player2Dec}>-100</Button>
            {<h2>Player 2 Score: { this.state.player2Score }</h2>}

            <Button variant="contained" color="success" onClick={this.Player3Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player3Dec}>-100</Button>
            {<h2>Player 3 Score: { this.state.player3Score }</h2>}

            <Button variant="contained" color="success" onClick={this.Player4Inc}>+100</Button>
            <Button variant="contained" color="error" onClick={this.Player4Dec}>-100</Button>
            {<h2>Player 4 Score: { this.state.player4Score }</h2>}
            {<h2>Turn: { this.state.turn }</h2>}
            </div>
            
          );
          
      }
    }
