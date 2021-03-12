import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

function reducer() {
  return ({
    questionsList: [],
    displayQuestion: {
      question: "What is React?",
      answer: "A front end, JavaScript library for building user interfaces or UI components"
    },
    questionCounter: 1
  })
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);