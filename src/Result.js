import React from "react";
import { useState, useEffect } from "react";
import "./Result.css";
import { Link, useNavigate } from "react-router-dom";

const Result = (props) => {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [finishStatus, setfinishStatus] = useState(false);
  const [highScore, setHighScore] = useState(JSON.parse(localStorage.getItem("Score")) || [])
  const handleSetHighScore = (newHighScore) => {
    var temp = highScore
    temp.push(newHighScore)
    setHighScore(temp)
    console.log(highScore)
  }

  const History = useNavigate();
  let temp = {};
  temp = {
    name: name,
    score: props.timer,
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = () => {
    setSubmit(true);
    handleSetHighScore(temp)
    highScore.sort((a, b) => b.score-a.score)
    localStorage.setItem("Score", JSON.stringify(highScore));
    props.setTimer(50);
  };

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!finishStatus) {
        if (window.confirm("Are you sure you want to terminate your Quiz? Your score will be lost!!")) {
            setfinishStatus(true);
            History('/');
            props.setTimer(50);
            props.setCompleted(true);
        } else {
            window.history.pushState(null, null, window.location.pathname);
            setfinishStatus(false)
        }
    }
}
  
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);  
    };
  }, []);

  return (

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
      
        <ol class="carousel-indicators ">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
 
        
    
      
  <div className="carousel-inner">
    <div className="carousel-item active heading-result">
       ALL Done!
    </div>
    
    <div className="carousel-item ">
    <form className="container1 xthing">
    <div className="container2">
      <div className="parag">Your final score is {props.timer} sec.</div>
      <div className="initials">
        Enter initials:{" "}
        <input
          className="input-field"
          value={name}
          key="name"
          type="text"
          onChange={nameChangeHandler}
        ></input>
        <Link to='/' >
          <button type="button" className="btn btn-outline-success btn-sm submit-button" onClick={submitHandler}>Submit</button>
        </Link>
      </div>
    </div>
  </form>
    </div>
    
  </div>
  <a class="carousel-control-prev designing" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
  </a>

  <a class="carousel-control-next designing" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" ></span>
  </a>
</div>
    // <form className="container1">
    //   <div className="container2">
    //     <div className="parag">Your final score is {props.timer} sec.</div>
    //     <div className="initials">
    //       Enter initials:{" "}
    //       <input
    //         className="input-field"
    //         value={name}
    //         key="name"
    //         type="text"
    //         onChange={nameChangeHandler}
    //       ></input>
    //       <Link to='/' >
    //         <button className="button" onClick={submitHandler}>Submit</button>
    //       </Link>
    //     </div>
    //   </div>
    // </form>
  );
};

export default Result;
