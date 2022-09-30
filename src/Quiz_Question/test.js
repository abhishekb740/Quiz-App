import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import { useRef } from "react";

const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
    id: 0,
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
    id: 1,
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
    id: 2,
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
    id: 3,
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
    id: 4,
  },
];

const Question = () => {
  const [ids, setIds] = useState(0);
  const [opt0,setOpt0] = useState(false);
  const [opt1,setOpt1] = useState(false);
  const [opt2,setOpt2] = useState(false);
  const [opt3,setOpt3] = useState(false);
  const buttonref = useRef()

  const idHandler = () => {
    setIds((prevId) => prevId + 1);
  };

  const ClickHandler = (idss) => {
    console.log(buttonref);
    buttonref.current.className='active'
    if(idss===0)
    setOpt0(curr => !curr)
    if(idss===1)
    setOpt1(curr => !curr)
    if(idss===2)
    setOpt2(curr => !curr)
    if(idss===3)
    setOpt3(curr => !curr)
  }

  return (
    <div className="container">
      <div className="Qcard">
        <h1>{questions[ids].questionText}</h1>
        <div className="options">
          {questions[ids].options.map((option) => {     
            return <button onClick={ClickHandler} ref={buttonref} key={ids}>{option}</button>;
          })}
        </div>
        <div className="saving">
          <button onClick={idHandler} > Save and Next </button>
          <button>Submit</button>
        </div>
        <div className="exit">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question;
