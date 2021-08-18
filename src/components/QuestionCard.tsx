import React from "react";
import { AnswerObject } from "../game";

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
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{ __html: question }} />
    {answers.map((answers) => {})}
    <button onClick={lifeline}>50/50 life-line</button>
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
);

export default QuestionCard;
