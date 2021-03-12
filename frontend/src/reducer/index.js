import { GET_QUESTIONS, NEXT_QUESTION, RESTART_SESSION } from "../actions";

const initialState = {
  questionsList: [
    {
      question: "What is React?",
      answer: "A front end, JavaScript library for building user interfaces or UI components"
    },
    {
      question: "What is Node.js?",
      answer: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser"
    }
  ],
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
      return {
        ...state,
        questionCounter: state.questionCounter + 1
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