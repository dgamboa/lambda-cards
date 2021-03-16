import { NEXT_QUESTION,
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
      return {
        ...state,
        questionsList: [],
        displayQuestion: {},
        questionCounter: 1,
        isFetching: true,
        error: ""
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionsList: action.payload,
        displayQuestion: action.payload[0],
        isFetching: false,
      };
    case FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        questionCounter: state.questionCounter + 1,
        displayQuestion: state.questionsList[state.questionCounter]
      };
    default:
      return state;
  }
};

export default reducer;