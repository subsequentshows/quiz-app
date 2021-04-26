import React, { useState, useEffect } from "react";

// import Container from "react-bootstrap/Container";
// import { Button } from "react-bootstrap/Button";

/* eslint-disable no-unused-expressions */

export default function QuizzBody(props) {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);


  //Get API
  useEffect(() => {
    (async function getQuestion() {
      const res = await fetch("https://tet-quiz.herokuapp.com/questions");
      const data = await res.json();
      setQuestions(data);
    })();
  }, []);

  //
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <>
      <div className="container d-flex just">
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                {/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
                <span>Question 1</span> / 4
              </div>
              <div className="question-text">
                {/* {questions[currentQuestion].questionText} */}
                {questions[0].questionText}
              </div>
            </div>

            <div className="answer-section">
              {/* {questions[currentQuestion].answerOptions.map( */}
              {questions[0].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

