import { NEXT_QUESTION,
         RESTART_SESSION,
         FETCH_QUESTIONS_LOADING,
         FETCH_QUESTIONS_SUCCESS,
         FETCH_QUESTIONS_FAIL } from "../actions";

const initialState = {
  questionsList: [],
  displayQuestion: {},
  questionCounter: 1,
  isFetching: false,
  error: ""
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUESTIONS_LOADING:
      return state;
    case FETCH_QUESTIONS_SUCCESS:
      return state;
    case FETCH_QUESTIONS_FAIL:
      return state;
    case NEXT_QUESTION:
      return {
        ...state,
        questionCounter: state.questionCounter + 1,
        displayQuestion: state.questionsList[state.questionCounter]
      };
    case RESTART_SESSION:
      return {
        ...state,
        questionCounter: 1
      };
    default:
      return state;
  }
};

export default reducer;