import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: string,
  setCategoryName: any
) => {
  let endpoint = undefined;
  if (typeof category === "string") {
    switch (category) {
      case "any":
        setCategoryName("Any Category");
        break;
    }
    endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  } else {
    switch (category) {
      case 9:
        setCategoryName("General Knowledge");
        break;
      case 11:
        setCategoryName("Entertainment: Film");
        break;
      case 12:
        setCategoryName("Entertainment: Music");
        break;
      case 18:
        setCategoryName("Science: Computers");
        break;
      case 21:
        setCategoryName("Sports");
        break;
      case 22:
        setCategoryName("Geography");
        break;
      case 23:
        setCategoryName("History");
        break;
      case 26:
        setCategoryName("Celebrities");
        break;
      case 27:
        setCategoryName("Animals");
        break;
    }
    endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  }
 
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
