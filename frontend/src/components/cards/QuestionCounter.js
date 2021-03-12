import React from 'react';
import { connect } from 'react-redux';

function QuestionCounter(props) {
  const { totalQuestions, questionCounter } = props;
  
  return (
    <header className="question-counter-container">
      <h3>Question {questionCounter}/{totalQuestions}</h3>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    totalQuestions: state.questionsList.length,
    questionCounter: state.questionCounter
  };
};

export default connect(mapStateToProps, {})(QuestionCounter);