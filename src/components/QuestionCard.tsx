import React from "react";
import {AnswerObject} from "../App"


type props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    useranswer: AnswerObject | undefined;
    questionNr: Number;
    totalQuestions: number;

}

const QuestionCard: React.FC<props> = ({question, answers, callback, useranswer, questionNr, totalQuestions }) => (
<div>
    <p className="number">
        Question: {questionNr} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{__html: question}}/>

    <div>
        {answers.map(answer =>(
            <div key={answer}>
                <button disabled = {useranswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} ></span>
                </button>
            </div>
        ))}
    </div>
</div>
);

export default QuestionCard;