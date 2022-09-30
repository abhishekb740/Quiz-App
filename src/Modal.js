import React, { useState } from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const [highScore, setHighScore] = useState(JSON.parse(localStorage.getItem("Score")) || [])
  console.log(highScore)

  const clearHighscoreHandler =()=>{
    localStorage.clear("Score");
    setHighScore([]);
  }

  const gobackHandler =()=>{
    props.setTimer(50);
  }

  return (
    <div className="Modal">
      <div className="Highscores">
        <div className="highscoring-text">
           <h1>Highscores</h1>
        </div>
       
        <div className="details">
          {highScore.map(({name, score}, i) => {
            return <p key={i}>{name} - {score}</p>
          })}
        </div>
        <div className="footer">
          <div className="foote-backbtn">
          <Link to="/">
          <button className="butt1" onClick={gobackHandler}><i class="fa-solid fa-backward"></i></button>
          </Link>
          </div>
          <div className="foote-highscore"><button className="butt2" onClick={clearHighscoreHandler} >Clear Highscores</button></div>
          
        </div>
      </div>
    </div>
  );
};
export default Modal;
