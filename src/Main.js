import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  const Start = () => {
    props.setStartState(true);
  };
  return (
    <main>
      <div className="Card">
        <div className="head"><h2 className="heading">Coding Quiz Challenge</h2></div>
        
        <div><p className="para head">
          Try to answer to following code-related questions with in the time
          limit. Keep in mind that incorrect answers will penalize your
          score/time by ten seconds!
        </p> </div>
        
        <Link to="/questions" className="start-up" style={{textDecoration: 'none'} }>
          <button type="button" class="btn btn-outline-success btn-sm btn-block" onClick={Start}>
          <i class="fa-sharp fa-solid fa-play ok"></i>
            Start Quiz
          </button>
        </Link>
        
        
      </div>
    </main>
  );
};
export default Main;
