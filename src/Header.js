import React from "react";
import "./Header.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header1">
      <div className="header2">
        <div className="col">
          <button className="highscore">Quiz Challenge</button>
        </div>
        <div className="lol">
          <Link to="./highscores" style={{textDecoration: 'none'} } className="highscore-text" >View Highscore</Link>
          <i class="fa-solid fa-quote-right leftpointer"></i>
          {/* <img className="leftpointer" src={logo}></img> */}
        </div>
      </div>
      <span> Time : {props.timer} sec </span>
    </div>
  );
};
export default Header;
