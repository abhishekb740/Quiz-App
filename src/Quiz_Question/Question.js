import React, { useEffect, useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";

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

const Question = (props,{navigation}) => {
  const [ids, setIds] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showResult,setShowResult] = useState(false);
  const [answerStatus, setAnswerStatus] = useState("sedfsedfsed");
  const History = useNavigate();
  const [finishStatus, setfinishStatus] = useState(false);


  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!finishStatus) {
        if (window.confirm("Do you want to Quit the Quiz without completing it?")) {
            setfinishStatus(true)
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

  const optionHandler = (event) => {
    setClicked(true);
    setShowResult(true);
    if (event.target.innerText === questions[ids].answer) {
      setAnswerCorrect(true);
      setAnswerStatus("Correct Answer!!");
      event.target.classList.add("correctans");
    }
    else {
      props.setTimer(prevCount => prevCount - 10);
      setAnswerCorrect(false);
      setAnswerStatus("Incorrect Answer!!");
      event.target.classList.add("wrongans");
    }
    const tick = () => {
      setClicked(false);
      setAnswerCorrect(false);  
      setShowResult(false);
      if(questions[ids].id===questions.length-1){
        History("./result");
        props.setCompleted(true);
      }
      event.target.classList.remove("correctans");
      event.target.classList.remove("wrongans");
      setIds((prevCount) => prevCount + 1);
    };
    setTimeout(tick, 650);
  };

  return (
    <div className="container">
      <div className="Qcard">
        <h1>{questions[ids].questionText}</h1>
        <div className="options">
          {questions[ids].options.map((option) => {
            return (
              <button type="button" className="btn btn-outline-secondary" key={option[0]} onClick={clicked ? "" : optionHandler}>
                {option}
              </button>
            );
          })}
        </div>
        <div>
          {showResult && <p className="answerStatus">{answerStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default Question;
