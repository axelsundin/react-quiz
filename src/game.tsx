import React, { useState, createContext, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
import { Button } from "@material-ui/core";
// Types
import { QuestionState, Difficulty } from "./API";
import ChooseName from "./components/ChooseName";
import Modal from "./components/Modal";

export const UserContext = createContext<any | null>(null);

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function Game() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [difficulty, setDifficulty] = useState("easy");
  const [name, setName] = useState(undefined);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    console.log(difficulty);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <UserContext.Provider
      value={{
        name,
        difficulty,
        score,
        setName,
        setDifficulty,
        startTrivia,
      }}
    >
      <div className="App">
        <h1>Quiz App</h1>
        {console.log(
          "answered quesetions: ",
          userAnswers.length,
          "gameOver: ",
          gameOver,
          "loading: ",
          loading
        )}
        {gameOver ? <ChooseName /> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && TOTAL_QUESTIONS > userAnswers.length && (
          <>
            <h4>Name: {name}</h4>
            <h4>Difficulty: {difficulty}</h4>
            <p className="score">Score: {score}</p>
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              useranswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </>
        )}
        {!loading && !gameOver && TOTAL_QUESTIONS === userAnswers.length && (
          <Modal />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </UserContext.Provider>
  );
}

export default Game;
