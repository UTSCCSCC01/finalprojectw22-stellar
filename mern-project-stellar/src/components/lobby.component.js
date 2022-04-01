import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import {io} from 'socket.io-client';
import axios from 'axios';


export default class Lobby extends Component {

  constructor(props){
      super(props)

      this.chatLog = []

      this.state = {
        ready: false,
        text: "Not Ready",
        button: "Ready",
        socket: io("http://localhost:4000"),
        players: ['Empty', 'Empty', 'Empty', 'Empty'], 
        status: ['Not Ready', 'Not Ready', 'Not Ready', 'Not Ready'],
        roomNum: window.location.pathname.split('/')[2],
        lobbyID : this.props.id,
        inputValue: "",
        chatLog: []

      }

      this.newPlayer(this.state.roomNum)
      console.log("lobbyID " + this.state.lobbyID)
      

      this.state.socket.on("update-players", (room) => {
        this.updatePlayers(room)
        // console.log(room)
      })

      this.state.socket.on("status-update", (room) => {
        this.updateStatus(room)
        // console.log(room)
      })

      this.state.socket.on("message-broadcast", (msg, room, name) => {
        console.log("message-sent: " + msg)
        this.chatLog.push({name: name, msg: msg})
        
        this.setState({chatLog: this.chatLog})
      })

      this.state.socket.on('user-left', (room, lobbyID) => {
        console.log("USER-LEFT")
        this.removePlayer(room, lobbyID)
      })
    }

    // Removes player from the server and updates client player and status after the fact
    removePlayer = async (room, lobbyID) => {

      const res = await axios.post("http://localhost:5000/game-browser/removePlayer", {room: room, lobbyID: lobbyID})
      console.log(lobbyID)
      console.log(res.data)
      this.setState({players: res.data.players})
      this.setState({status: res.data.status})
      
    };

    // Updates the clients status with the verion on the server
    updateStatus = async (room) => {

      const res = await axios.post("http://localhost:5000/game-browser/getStatus", {room: room})
      let status = res.data
      this.setState({status: res.data})
      console.log("updateStatus")
      console.log(status)
    };

    // Updates the clients players with the verion on the server
    updatePlayers = async (room) => {

      const res = await axios.post("http://localhost:5000/game-browser/getPlayers", {room: room})
      let players = res.data
      this.setState({players: res.data})
      console.log("updatePlayers")
      console.log(players)
    };

    // Initialize new player on server and broadcast to every other users in the room that they need to update
    newPlayer = async (room) => {
      const res = await axios.post("http://localhost:5000/game-browser/newPlayer", {room: room, lobbyID: this.state.lobbyID})
      console.log("NEWPLAYER")
      console.log(res.data)
      this.setState({players: res.data})
      this.state.socket.emit('new-player', this.state.roomNum, this.state.lobbyID);
      this.sendMessage(this.state.roomNum + " has joined")
      
    };

    updateInputValue = (evt) => {
      let updatedInputValue = evt.target.value;
      

      this.setState({inputValue: updatedInputValue});
      console.log(this.state.inputValue)
    }

    sendMessage = (evt, msg="") => {
      evt.preventDefault()
      if (msg == "") {
        this.chatLog.push({name: this.state.lobbyID, msg: this.state.inputValue})
        this.setState({chatLog: this.chatLog})
        this.state.socket.emit('message-sent', this.state.inputValue, this.state.roomNum, this.state.lobbyID)
        this.setState({inputValue: ""});
      } else {
        console.log("HERE")
        this.chatLog.push({name: this.state.lobbyID, msg: this.state.inputValue})
        this.setState({chatLog: this.chatLog})
        this.state.socket.emit('message-sent', msg, this.state.roomNum, this.state.lobbyID)
        this.setState({inputValue: ""});
      }
      
    }

    // Update server status with client-side status
    changeStatus = async () =>{
      this.setState({ready: !this.state.ready})

      if (this.state.ready) {
        this.setState({text: "Ready"})
        this.setState({button: "Not Ready"})

      } else {
        this.setState({text: "Not Ready"})
        this.setState({button: "Ready"})

      }
      console.log("beens")

      for (let x = 0; x < this.state.players.length; x++) {
          console.log(this.state.players[x])
          console.log("ID "+this.state.lobbyID)
        if (this.state.lobbyID == this.state.players[x]) {
          console.log("AHHHHHHH")
          
          let tempStatus = this.state.status
          tempStatus[x] = this.state.text
          this.setState({status: tempStatus})
        }

      }

      const res = await axios.post("http://localhost:5000/game-browser/changeStatus", {status: this.state.status ,room: this.state.roomNum})
      this.state.socket.emit('status-update', this.state.roomNum);
      // let players = res.data
      // this.setState({players: res.data})
      // console.log("updatePlayers")
      // console.log(players)

    }

    render() {
        let btn_class = this.state.ready ? "readyButton" : "notReadyButton";


        return (
          <div className='main'>


                <table className='options child'>
                  <tr><Link to="/create" className="nav-link">Change Map</Link></tr>
                  <tr><Link to="/create" className="nav-link">Game Options</Link></tr>
                  <tr><Link to="/create" className="nav-link">Kick Player</Link></tr>
                </table>

              

                <table className='players child'>
                  <tr>
                    <th className='name'><EditText value={this.state.players[0]} defaultValue='Empty'/></th>
                    <th className='status'>{this.state.status[0]}</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText value={this.state.players[1]} defaultValue='Empty'/></th>
                    <th className='status'>{this.state.status[1]}</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText value={this.state.players[2]} defaultValue='Empty'/></th>
                    <th className='status'>{this.state.status[2]}</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText value={this.state.players[3]} defaultValue='Empty'/></th>
                    <th className='status'>{this.state.status[3]}</th>
                  </tr>

                </table>


              <img className='child' src={require('./Default.png')} />

              <div className='ready child'>

                <div className='chat-container'>
                  <div className='chat-log'>
                    {this.chatLog.map((chat) => (
                      <h2>{chat.name + ": " + chat.msg}<br></br></h2>
                    ))}
                  </div>
                  <div className='input-field'>
                    <form>
                      <input size='75' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></input>
                      <button onClick={this.sendMessage.bind(this)}>Send</button>
                    </form>
                  </div>
                  
                </div>
                <button className={btn_class + ' ready-button'} onClick={evt => this.changeStatus(evt)}>
                    {this.state.button}
                </button>
                <button className='ready-button'>Force Start</button>
              </div>
                

          </div>
        )
      }
    }