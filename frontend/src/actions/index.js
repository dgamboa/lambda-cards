export const NEXT_QUESTION = "NEXT_QUESTION";
export const GET_QUESTIONS = "GET_QUESTION";

export function nextQuestion() {
  return {
    type: NEXT_QUESTION
  }
};

export function getQuestions() {
  return {
    type: GET_QUESTIONS
  }
};