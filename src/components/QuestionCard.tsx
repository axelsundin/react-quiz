import React from "react";

type props = {
    question: string;
    answers: string[];
    callback: any;
    useranswer: any;
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
                <button disabled = {useranswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} ></span>
                </button>
            </div>
        ))}
    </div>
</div>
);

export default QuestionCard;