import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RedirectButton from "./redirect-button.component.js";

export default class GameBrowser extends Component {

  constructor(){
    super()

    this.state = {
      gamesArray: [],
      games: null
    }
    this.refresh()
  }

  refresh = async (room, lobbyID) => {

    const res = await axios.get("http://localhost:5000/game-browser/getGames")
    const gamesArray = Object.keys(res.data)
    console.log(gamesArray)
    this.setState({games: res.data})    
    this.setState({gamesArray: gamesArray})    
  };

  

  render() {
      return (
        <>
        {this.state.gamesArray.map((ID) => (
          <h2>{ID + ": " + this.state.games[ID].Title}<RedirectButton value="Join Game" id={ID}/><br></br></h2>
        ))}
          <RedirectButton value="Create Game"/>
        </>
      )
    }
  }

