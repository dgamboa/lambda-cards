export const NEXT_QUESTION = "NEXT_QUESTION";
export const GET_QUESTIONS = "GET_QUESTION";
export const RESTART_SESSION = "RESTART_SESSION";

export function nextQuestion() {
  return {
    type: NEXT_QUESTION
  };
};

export function getQuestions() {
  return {
    type: GET_QUESTIONS
  };
};

export function restartSession() {
  return {
    type: RESTART_SESSION
  };
};