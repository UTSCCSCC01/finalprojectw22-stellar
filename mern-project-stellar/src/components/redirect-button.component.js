import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function RedirectButton() {

  let id = 0;
  let navigate = useNavigate(); 
  
  const handleClick = async () => {
      const res = await axios.get('http://localhost:5000/game-browser/getNewID');
      id = res.data
      let path = "/lobby/" + id;
      navigate(path);
  };

  return (
    <>
      <button onClick={handleClick}>
          Create Game
      </button>
    </>
  )
}

export default RedirectButton;