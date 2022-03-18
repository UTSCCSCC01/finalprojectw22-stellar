import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RedirectButton from "./redirect-button.component.js";

export default class GameBrowser extends Component {

  constructor(){
    super()
  }

  render() {
      return (
        <>
          <RedirectButton />
        </>
      )
    }
  }

