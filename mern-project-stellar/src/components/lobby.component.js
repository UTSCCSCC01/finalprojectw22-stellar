import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';


export default class Lobby extends Component {

  constructor(){
      super()

      this.state = {
        ready: false,
        text: "Not Ready",
        button: "Ready"
      }
    }

    changeStatus(){
      this.setState({ready: !this.state.ready})

      if (this.state.ready) {
        this.setState({text: "Ready"})
        this.setState({button: "Not Ready"})

      } else {
        this.setState({text: "Not Ready"})
        this.setState({button: "Ready"})

      }

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
                    <th className='name'><EditText defaultValue='Player 1'/></th>
                    <th className='status'>{this.state.text}</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText defaultValue='Empty'/></th>
                    <th className='status'>Not Ready</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText defaultValue='Empty'/></th>
                    <th className='status'>Not Ready</th>
                  </tr>
                  <tr>
                    <th className='name'><EditText defaultValue='Empty'/></th>
                    <th className='status'>Not Ready</th>
                  </tr>

                </table>


              <img className='child' src={require('./Default.png')} />
              <div className='ready child'>
              
                <button className={btn_class} onClick={this.changeStatus.bind(this)}>
                    {this.state.button}
                </button>
                <button>Force Start</button>

              </div>
                

          </div>
        )
      }
    }