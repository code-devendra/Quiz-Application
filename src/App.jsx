import Home from "./components/Home";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [again, setAgain] = useState(true);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=boolean")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.log(err));
  }, [again]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [quizStart, setQuizStart] = useState(false);
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-sky-300 to-indigo-400">
      {!quizStart ? (
        <Home
          start={() => {
            setQuizStart(true);
          }}
        />
      ) : (
        <>
          {questions.length !== 0 ? (
            <>
              {questionNumber < 10 ? (
                <Quiz
                  nextQuestion={(ans) => {
                    let correctAns =
                      questions[questionNumber].correct_answer === "True"
                        ? true
                        : false;
                    if (ans === correctAns) {
                      setResult(result + 1);
                    }
                    setQuestionNumber(questionNumber + 1);
                  }}
                  id={questionNumber + 1}
                  question={questions[questionNumber].question}
                />
              ) : (
                <Result
                  restartQuiz={() => {
                    setResult(0);
                    setQuestionNumber(0);
                    setQuizStart(false);
                    setQuestions([]);
                    setAgain(!again);
                  }}
                  correct={result}
                />
              )}
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </div>
  );
}

export default App;
