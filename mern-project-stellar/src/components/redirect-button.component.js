import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RedirectButton = (props) => {

  let id = 0;
  let navigate = useNavigate(); 
  
  const handleClick = async () => {
    if (props.id == null) {
      const res = await axios.get('http://localhost:5000/game-browser/getNewID');
      id = res.data
      let path = "/lobby/" + id;
      navigate(path);
    } else {
      let path = "/lobby/" + props.id;
      navigate(path);
    }
      
  };

  return (
    <>
      <button class="btn btn-secondary ms-2" onClick={handleClick}>
          {props.value}
      </button>
    </>
  )
}

export default RedirectButton;