import React, { useContext, useState } from "react";
import { AnswerObject, UserContext } from "../game";
import { shuffleArray } from "../utils";

type props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lifeline: any;
  useranswer: AnswerObject | undefined;
  questionNr: Number;
  totalQuestions: number;
};

const QuestionCard: React.FC<props> = ({
  question,
  answers,
  callback,
  lifeline,
  useranswer,
  questionNr,
  totalQuestions,
}) => {
  const { lifelineBtn, setLifelineBtn } = useContext(UserContext);
  const [lifelineUsed, setLifelineUsed] = useState(false);

  let incorrectAnswers = lifeline(answers);

  return (
    <>
      {!lifelineUsed ? (
        <div>
          <p className="number">
            Question: {questionNr} / {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }} />

          <button
            disabled={lifelineBtn}
            onClick={() => {
              incorrectAnswers = shuffleArray(incorrectAnswers);
              answers.map((answer) => {
                if (
                  answer === incorrectAnswers[0] ||
                  answer === incorrectAnswers[1]
                ) {
                  
                  setLifelineUsed(true);
                  setLifelineBtn(true);
                }
              });
            }}
          >
            50/50 life-line
          </button>
          <div>
            {answers.map((answer) => (
              <div key={answer}>
                <button
                  disabled={useranswer ? true : false}
                  value={answer}
                  onClick={callback}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="number">
            Question: {questionNr} / {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }} />

          <button disabled={lifelineBtn}>50/50 life-line</button>
          <div>
            {answers.map((answer) => {
              return (
                <>
                  {answer === incorrectAnswers[0] ||
                  answer === incorrectAnswers[1] ? (
                    <div key={answer}>
                      <button
                        disabled={true}
                        value={answer}
                        onClick={(e) => {
                          callback(e);
                          setLifelineUsed(false);
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: answer }}
                        ></span>
                      </button>
                    </div>
                  ) : (
                    <div key={answer}>
                      <button
                        disabled={useranswer ? true : false}
                        value={answer}
                        onClick={(e) => {
                          callback(e);
                          setLifelineUsed(false);
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: answer }}
                        ></span>
                      </button>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionCard;
