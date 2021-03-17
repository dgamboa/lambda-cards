import axios from 'axios';
import shuffle from "./shuffle";

export const NEXT_QUESTION = "NEXT_QUESTION";
export const FETCH_QUESTIONS_LOADING = "FETCH_QUESTIONS_LOADING";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTIONS_FAIL";

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:4000${path}`
  } else {
    return path
  }
};

export const getQuestions = () => dispatch => {
  dispatch(fetchQuestionsLoading());

  axios.get(getUrl('/api/questions'))
    .then(res => {
      const shuffledList = shuffle(res.data);
      dispatch(fetchQuestionsSuccess(shuffledList));
    })
    .catch(err => {
      dispatch(fetchQuestionsFail(err.response.data.message));
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