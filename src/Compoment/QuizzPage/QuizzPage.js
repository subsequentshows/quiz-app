import React, { useEffect, useLayoutEffect, useState } from "react";
// import Container from "react-bootstrap/esm/Container";
// import QuizzBody from "./QuizzBody";
import "./QuizzPage.css";

export default function QuizzPage() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Go to score page
  const [showScore, setShowScorePage] = useState(false);

  // console.table(questionLength)
  // console.log(questions)

  // const quizzComponents = quizz.map((quizzProp) => {
  //   return (
  //     <>
  //       key={quizzProp.id}
  //       questionText={quizzProp.questionText}
  //       answerOptions={}

  //       {data[currentQuestion].answerOptions.map(
  //                 (answerOption) => (
  //                   <button
  //                     onClick={() =>
  //                       handleAnswerOptionClick(answerOption.isCorrect)
  //                     }
  //                   >
  //                     {answerOption.answerText}
  //                   </button>
  //                 )
  //               )}

  //     </>
  //   );
  // });

  //Get API
  useEffect(() => {
    (async function getQuestion() {
      const res = await fetch("https://tet-quiz.herokuapp.com/questions");
      const data = await res.json();
      setQuestions(data);
    })();
  }, []);

  // Check questions
  // useEffect(() => {
  //   const handleAnswerOptionClick = () => {
  //     const nextQuestion = currentQuestion + 1;
  //     if (nextQuestion < questions.length) {
  //       setCurrentQuestion(nextQuestion + 1);
  //     } else {
  //       setShowScore(true);
  //     }
  //   };
  // }, []);

  // Check question 2
  // const handleAnswerOptionClick = () => {
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true)
  //   }
  // }, [];

  const handleAnswerOptionClick = (isCorrectAnswer) => {
    if(isCorrectAnswer === true)
      setScore(score + 1)
      // Check if correct not working

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScorePage(true)
    }
  };

  //
  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }
  // };

  // const shuffledAnswers = [data.answerOptions.isCorrect]
  // return questions.length > 0 ? (
  return (
    <>
      <div className="container d-flex just">
        <div className="app">
          {showScore ? (
            <div className="score-section">
              <p>
                You scored {score} out of {questions.length}
              </p>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span> /{" "}
                  {questions.length}
                </div>

                <div className="question-text">
                  {questions[currentQuestion]?.questionText}
                </div>
              </div>

              <div className="answer-section">
                
                {questions[currentQuestion]?.answerOptions.map((answerProp) => (
                  <button onClick={() =>
                      handleAnswerOptionClick(answerProp.isCorrect)
                     
                    }
                  >
                     {/* {console.log(answerProp.isCorrect)} */}

                    {answerProp.answerText}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* )} */}
        </div>
      </div>
    </>
  );
}

/* after return
   		<Router>
			<Switch>
				<Route exact path = {Home}></route>
				<Route exact path = {login}></route>
				<Route exact path = ></route>
			</Switch>
		</Router> */
