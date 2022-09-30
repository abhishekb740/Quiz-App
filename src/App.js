import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import Question from "./Quiz_Question/Question";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App(props) {
  const [startState, setStartState] = useState(false);
  const [timer, setTimer] = useState(50);
  const [completed, setCompleted] = useState(false);
  const [homepage,setHomepage] = useState(false);
  
  const History = useNavigate();
  const Location = useLocation();

  if (timer < 0) {
    History("/questions/result");
    setTimer(0);
  }

  const tick = () => {
    if (timer > 0 && !completed) {
      setTimer((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    if (startState) {
      var Timeout;
      if (timer > 0) {
        Timeout = setTimeout(tick, 1000);
      }
      if (timer === 0) {
        History("/questions/result");
      }
      return () => {
        clearInterval(Timeout);
      };
    }
  });

  return (
    <div>
      <Header timer={timer} />
      <Routes>
        <Route
          path="/"
          element={<Main setStartState={setStartState} />}
        ></Route>
      </Routes>
      <Routes>
        <Route path="/highscores" element={<Modal setTime={setTimer} />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/questions"
          element={
            <Question
              setTimer={setTimer}
              timer={timer}
              setCompleted={setCompleted}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/questions/result"
          element={<Result timer={timer} setTimer={setTimer} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
