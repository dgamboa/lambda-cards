import axios from 'axios';

export const NEXT_QUESTION = "NEXT_QUESTION";
export const RESTART_SESSION = "RESTART_SESSION";
export const FETCH_QUESTIONS_LOADING = "FETCH_QUESTIONS_LOADING";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTIONS_FAIL";

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:5000${path}`
  } else {
    return path
  }
};

export const getQuestions = () => dispatch => {
  dispatch(fetchQuestionsLoading());

  axios.get(getUrl('/api/questions'))
    .then(res => {
      console.log({res}) // finish
    })
    .catch(err => {
      console.log({err}) // finish error setting with Fail
    })
};

export function fetchQuestionsLoading() {
  return {
    type: FETCH_QUESTIONS_LOADING
  };
};

export function fetchQuestionsSuccess(questions) {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions
  };
};

export function fetchQuestionsFail(error) {
  return {
    type: FETCH_QUESTIONS_FAIL,
    payload: error
  };
};

export function nextQuestion() {
  return {
    type: NEXT_QUESTION
  };
};

export function restartSession() {
  return {
    type: RESTART_SESSION
  };
};