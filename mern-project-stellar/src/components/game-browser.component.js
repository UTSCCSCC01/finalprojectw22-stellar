import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './game-browser.css';
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
        {/* Game Browser Heading */}
        <div class="d-flex justify-content-center">
          <h1 class="display-1 justify-content-center mt-3">Stellar Game Browser</h1>
        </div>
    
        <div class="container">

          {/* Space for listing games */}
          <h2 class="display-6 mb-4">Public Matches</h2>

          
          <div class="row mt-3">


            {this.state.gamesArray.map((ID) => (

              // List all games
              <div class="col-lg-4 col-md-6 col-12">
                <h2 class="mt-2 d-flex justify-content-end align-items-center">{ID + ": " + this.state.games[ID].Title}<RedirectButton value="Join Game" id={ID}/></h2>
              </div>
            ))}
      
            
            <RedirectButton value="Create Game"/>

            </div>
    
        </div>
        </>

      )
    }
  }

