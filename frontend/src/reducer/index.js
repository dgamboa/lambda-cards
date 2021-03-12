import { GET_QUESTIONS, NEXT_QUESTION } from "../actions";

const initialState = {
  questionsList: [],
  displayQuestion: {
    question: "What is React?",
    answer: "A front end, JavaScript library for building user interfaces or UI components"
  },
  questionCounter: 1
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_QUESTIONS:
      return state;
    case NEXT_QUESTION:
      console.log("hello from reducer")
      return state;
    default:
      return state;
  }
};

export default reducer;